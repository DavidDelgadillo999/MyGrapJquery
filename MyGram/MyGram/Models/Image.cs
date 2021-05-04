using System;
namespace MyGram.Models
{
    public class Image
    {
        public Image()
        {
        }
        public int ImageId { get; set; }
        public string ImageAlt { get; set; }
        public string ImagePath { get; set; }
        public string Description { get; set; }
    }
}
