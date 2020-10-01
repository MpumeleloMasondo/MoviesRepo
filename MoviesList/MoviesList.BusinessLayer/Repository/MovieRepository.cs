using MoviesList.BusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using System.Linq;

namespace MoviesList.BusinessLayer.Repository
{

    public class MovieRepository :BaseRepository
    {
       // private string connectionString { get; set; }
        public MovieRepository()
        {
            //connectionString = @"Data Source=196.40.101.2,6729;Initial Catalog=movies;User ID=moviesadmin;Password=fsjztTk%nu?20bmloNic";
        }

        public void Add(Movie movie)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string query = @"INSERT INTO MOVIE (MovieName, Category, Rating) VALUES ( @MovieName, @Category, @Rating)";
                dbConnection.Open();
                dbConnection.Query<Movie>(query, movie);
            }
        }

        public Movie GetById(int id)
        {

            using (IDbConnection dbConnection = Connection)
            {
                string query = @"Select * FROM MOVIE WHERE MovieID = @Id";
                dbConnection.Open();
                return dbConnection.Query<Movie>(query, new { Id = id }).FirstOrDefault();
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

        public void Delete(int id)
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
                string query = @"UPDATE MOVIE SET MovieName= @MovieName,  Category = @Category, Rating = @Rating Where MovieID = @MovieID";
                dbConnection.Open();
                dbConnection.Query<Movie>(query, movie);
//                select Count(MovieId) as Movies, Category from movie(nolock)
//group by category
            }
        }
    }
}
