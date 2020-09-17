using Movies.BusinessLayer.Models;
using System;
using System.Collections.Generic;
using Dapper;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Linq;

namespace Movies.BusinessLayer.Interfaces.Repository
{
    public class MovieRepository
    {
        private string connectionString { get; set; }
        public MovieRepository()
        {
            connectionString = @"";
        }

        public IDbConnection Connection
        {

            get
            {
                return new SqlConnection(connectionString);
            }
        }

        public void Add(Movie movie)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string query = @"INSERT INTO MOVIE (Name, Category, Rating) VALUES ( @Name, @Category, @Rating)";
                dbConnection.Open();
                dbConnection.Query<Movie>(query, movie);
            }
        }

        public Movie GetById(Guid id)
        {

            using (IDbConnection dbConnection = Connection)
            {
                string query = @"Select * FROM MOVIE WHERE MovieID = @Id";
                dbConnection.Open();
                return dbConnection.Query<Movie>(query, new { ID = id }).FirstOrDefault();
            }
        }

        public IEnumerable<Movie> GetAll()
        {

            using (IDbConnection dbConnection = Connection)
            {
                string query = @"Select * FROM MOVIE";
                dbConnection.Open();
                return dbConnection.Query<Movie>(query);
            }
        }

        public void Delete(Guid id)
        {

            using (IDbConnection dbConnection = Connection)
            {
                string query = @"DELETE  FROM MOVIE WHERE MovieID = @Id ";
                dbConnection.Open();
                dbConnection.Query<Movie>(query, new { Id = id });
            }
        }

        public void Update(Movie movie)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string query = @"UPDATE MOVIE SET Name= @Name,  Category = @Category, Rating = @Rating Where MovieID = @MovieID";
                dbConnection.Open();
                dbConnection.Query<Movie>(query, movie);
            }
        }
    }
}
