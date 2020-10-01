using Dapper;
using MoviesList.BusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace MoviesList.BusinessLayer.Repository
{
    public class DashboardRepository : BaseRepository
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
    }
}
