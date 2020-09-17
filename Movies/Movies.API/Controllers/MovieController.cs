using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movies.BusinessLayer.Interfaces.Repository;
using Movies.BusinessLayer.Models;
using System.Linq;

namespace Movies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {

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

        [HttpGet("{{id}")]
        public Movie GetById(Guid id)
        {

            return movieRepository.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody]Movie movie)
        {

            if (ModelState.IsValid)
                movieRepository.Add(movie);
        }

        [HttpPut("{{id}")]
        public void Update(Guid id, [FromBody]Movie movie)
        {

            movie.Id = id;
            if (ModelState.IsValid)
                movieRepository.Update(movie);

        }

        [HttpDelete("{{id}")]
        public void Delete(Guid id)
        {

            movieRepository.Delete(id);

        }

    }
}