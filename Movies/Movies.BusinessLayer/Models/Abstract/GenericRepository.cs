using Movies.BusinessLayer.Interfaces.Repository;
using System;
using System.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Reflection;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using System.Linq;
using System.ComponentModel;

namespace Movies.BusinessLayer.Models.Abstract
{
    public abstract class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        private readonly string _tableName;

        protected GenericRepository(string tableName)
        {
            _tableName = tableName;
        }

        private SqlConnection SqlConnection()
        {
            return new SqlConnection("");//ConfigurationManager.ConnectionStrings["DB"].ConnectionString);
        }

        /// <summary>
        /// Open new connection and return it for use
        /// </summary>
        /// <returns></returns>
        private IDbConnection CreateConnection()
        {
            var conn = SqlConnection();
            conn.Open();
            return conn;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            using (var connection = CreateConnection())
            {
                IEnumerable<string> t = new List<string>();
                return await connection.QueryAsync<T>($"SELECT * FROM {_tableName}");
            }
            // throw new NotImplementedException();
        }

        public async Task DeleteRowAsync(Guid id)
        {
            //throw new NotImplementedException();
            using (var connection = CreateConnection())
            {
                await connection.ExecuteAsync($"DELETE FROM {_tableName} WHERE Id=@Id", new { Id = id });
            }
        }

        public async Task<T> GetAsync(Guid id)
        {
            using (var connection = CreateConnection())
            {
                var result = await connection.QuerySingleOrDefaultAsync<T>($"SELECT * FROM {_tableName} WHERE Id=@Id", new { Id = id });
                if (result == null)
                    throw new KeyNotFoundException($"{_tableName} with id [{id}] could not be found.");

                return result;
            }

            //throw new NotImplementedException();
        }

        public async Task<int> SaveRangeAsync(IEnumerable<T> list)
        {
            var inserted = 0;
            var query = GenerateInsertQuery();
            using (var connection = CreateConnection())
            {
                inserted += await connection.ExecuteAsync(query, list);
            }

            return inserted;


            //throw new NotImplementedException();
        }

        public Task UpdateAsync(T t)
        {
            throw new NotImplementedException();
        }

        public Task InsertAsync(T t)
        {
            throw new NotImplementedException();
        }

        private string GenerateInsertQuery()
        {
            var insertQuery = new StringBuilder($"INSERT INTO {_tableName} ");

            insertQuery.Append("(");

            var properties = GenerateListOfProperties(GetProperties);
            properties.ForEach(prop => { insertQuery.Append($"[{prop}],"); });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(") VALUES (");

            properties.ForEach(prop => { insertQuery.Append($"@{prop},"); });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(")");

            return insertQuery.ToString();
        }

        private static List<string> GenerateListOfProperties(IEnumerable<PropertyInfo> listOfProperties)
        {
            return (from prop in listOfProperties
                    let attributes = prop.GetCustomAttributes(typeof(DescriptionAttribute), false)
                    where attributes.Length <= 0 || (attributes[0] as DescriptionAttribute)?.Description != "ignore"
                    select prop.Name).ToList();
        }

        private IEnumerable<PropertyInfo> GetProperties => typeof(T).GetProperties();
    }
}
