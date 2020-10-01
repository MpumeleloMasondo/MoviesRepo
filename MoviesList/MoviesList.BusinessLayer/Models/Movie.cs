using System;
using System.Collections.Generic;
using System.Text;

namespace MoviesList.BusinessLayer.Models
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string MovieName { get; set; }
        public string Category { get; set; }
        public string Rating { get; set; }

    }
}
