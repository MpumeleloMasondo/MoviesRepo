using Dapper;
using MoviesList.BusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace MoviesList.BusinessLayer.Repository
{
    public class RatingRepository : BaseRepository
    {
        public IEnumerable<MovieRating> GetMoviesCountPerRating()
        {
            using (IDbConnection dbConnection = Connection)
            {

                string query = @"select Count(MovieId) as MoviesCount, Rating from movie (nolock) group by Rating order by Rating";
                dbConnection.Open();
                return dbConnection.Query<MovieRating>(query);

            }
        }
    }
}
