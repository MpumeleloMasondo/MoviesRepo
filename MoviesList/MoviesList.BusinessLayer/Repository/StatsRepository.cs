using Dapper;
using MoviesList.BusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using static MoviesList.BusinessLayer.Models.Stats;

namespace MoviesList.BusinessLayer.Repository
{
    public class StatsRepository : BaseRepository
    {
        public IEnumerable<MovieCategory> GetMoviesCountPerCategory()
        {
            using (IDbConnection dbConnection = Connection)
            {

                string query = @"select Count(MovieId) as MoviesCount, Category from movie (nolock) group by category";
                dbConnection.Open();
                return dbConnection.Query<MovieCategory>(query);
            }
        }

        public IEnumerable<MovieCategory> GetCategoryPerRating()
        {
            using (IDbConnection dbConnection = Connection)
            {

                string query = @"select Count(MovieId) as MoviesCount, Category from movie (nolock) group by category";
                dbConnection.Open();
                return dbConnection.Query<MovieCategory>(query);
            }
        }

        public IEnumerable<CategoryRating> GetMoviesByRatingPerCategory()
        {
            using (IDbConnection dbConnection = Connection)
            {

                string query = @"select Count(MovieId) as Movies, Category, Rating from movie (nolock) group by rating, Category";
                dbConnection.Open();
                return dbConnection.Query<CategoryRating>(query);
            }
        }

        public IEnumerable<AverageCategoryRating> GetAverageByRatingPerCategory()
        {
            using (IDbConnection dbConnection = Connection)
            {

                string query = @"SELECT AVG (rating) As AverageRating , Category FROM movie group by Category";
                dbConnection.Open();
                return dbConnection.Query<AverageCategoryRating>(query);
            }
        }
    }
}
