using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace MoviesList.BusinessLayer.Repository
{
    public class BaseRepository
    {
        public string connectionString { get; set; }
        public BaseRepository()
        {
            connectionString = @"Data Source=196.40.101.2,6729;Initial Catalog=movies;User ID=moviesadmin;Password=fsjztTk%nu?20bmloNic";
        }
        public IDbConnection Connection
        {

            get
            {
                return new SqlConnection(connectionString);
            }
        }
    }
}
