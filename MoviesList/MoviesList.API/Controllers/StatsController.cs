using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesList.BusinessLayer.Models;
using MoviesList.BusinessLayer.Repository;
using static MoviesList.BusinessLayer.Models.Stats;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatsController : ControllerBase
    {
        // GET: api/<MovieController>
        private readonly StatsRepository statsRepository;

        public StatsController()
        {
            statsRepository = new StatsRepository();
        }

        [HttpGet("GetMoviesCountPerCategory")]
        public IEnumerable<MovieCategory> GetMoviesCountPerCategory()
        {

            return statsRepository.GetMoviesCountPerCategory();
        }

        [HttpGet("GetMoviesByRatingPerCategory")]
        public IEnumerable<CategoryRating> GetMoviesByRatingPerCategory()
        {

            return statsRepository.GetMoviesByRatingPerCategory();
        }

        [HttpGet("GetAverageByRatingPerCategory")]
        public IEnumerable<AverageCategoryRating> GetAverageByRatingPerCategory()
        {

            return statsRepository.GetAverageByRatingPerCategory();
        }

    }
}
