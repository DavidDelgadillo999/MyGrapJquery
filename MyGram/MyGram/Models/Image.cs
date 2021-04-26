using System;
namespace MyGram.Models
{
    public class Image
    {
        public Image()
        {
        }
        public int ImageId { get; set; }
        public int ImageAlt { get; set; }
        public int ImagePath { get; set; }
        public int Description { get; set; }
    }
}
