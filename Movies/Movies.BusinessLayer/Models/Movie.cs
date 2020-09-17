using System;
using System.Collections.Generic;
using System.Text;

namespace Movies.BusinessLayer.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Rating { get; set; }

    }
}
