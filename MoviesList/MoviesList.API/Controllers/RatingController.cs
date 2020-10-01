using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesList.BusinessLayer.Models;
using MoviesList.BusinessLayer.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        // GET: api/<MovieController>
        private readonly RatingRepository ratingRepository;

        public RatingController()
        {
            ratingRepository = new RatingRepository();
        }

        [HttpGet("GetMoviesCountPerRating")]
        public IEnumerable<MovieRating> GetMoviesCountPerRating()
        {

            return ratingRepository.GetMoviesCountPerRating();
        }

    }
}
