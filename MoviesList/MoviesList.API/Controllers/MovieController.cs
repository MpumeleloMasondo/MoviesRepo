using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesList.BusinessLayer.Models;
using MoviesList.BusinessLayer.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        // GET: api/<MovieController>
        private readonly MovieRepository movieRepository;

        public MovieController()
        {
            movieRepository = new MovieRepository();
        }

        [HttpGet]
        public IEnumerable<Movie> GetAll()
        {

            return movieRepository.GetAll();
        }

        [HttpGet("{id}")]
        public Movie GetById(int id)
        {
            

            return movieRepository.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody] Movie movie)
        {

            int moviesCount = movieRepository.GetAll().Where(x => x.MovieName.ToLower() == movie.MovieName.ToLower()).ToList().Count();

            if (moviesCount > 0)
            {
                return;
            }

            if (ModelState.IsValid)
                movieRepository.Add(movie);
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody] Movie movie)
        {

            int moviesCount = movieRepository.GetAll().Where(x => x.MovieName.ToLower() == movie.MovieName.ToLower() && x.MovieId != id).ToList().Count();

            //Need to update return function to include message
            if (moviesCount > 0)
            {
                return;
            }

            movie.MovieId = id;
            if (ModelState.IsValid)
                movieRepository.Update(movie);

        }

        [HttpDelete("delete/{id}")]
        public void Delete(int id)
        {
            movieRepository.Delete(id);
        }

    }
}
