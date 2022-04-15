using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitialiser
    {
        public static void Init(ProjectContext context)
        {
            if (context.Projects.Any()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    Name = "Northampton Church",
                    Description = "Edward Knight estate agents have offices in Northampton and Rugby and commissioned a set of illustrations of landmark buildings in the area for their new website. This bespoke digital illustration in their brand colours of black and yellow depicts Northampton Church and is part of a set of 4. After the project was complete, Terry from Edward Knight kindly left me this review on Google: \"Could not recommend Michelle highly enough, her work is flawless and imaginative. She is always on hand to help and has met all deadlines for our agency - thanks so much Michelle\"",
                    ImageUrl = "/images/projects/01 Church illustration.jpg",
                    Category = "Illustration"
                },
                new Project
                {
                    Name = "Personal Commision - Wedding Invite",
                    Description = "My clients wanted a vintage cartoon style wedding invitation, with themselves recreated as cartoon characters. This was a fun project, and the challenge was to show the personality of the bride and groom in the stylised caricatures.",
                    ImageUrl = "/images/projects/02 Wedding invite illustration.jpg",
                    Category = "Illustration"
                },
                new Project
                {
                    Name = "Zero Waste Shop Mural",
                    Description = "Zero Waste Shop Mural",
                    ImageUrl = "/images/projects/03 Zero waste shop mural.jpg",
                    Category = "Mural"
                },
                new Project
                {
                    Name = "Modern Monogram Logo",
                    Description = "Modern Monogram Logo",
                    ImageUrl = "/images/projects/04 Modern monogram logo.jpg",
                    Category = "Branding"
                },
                new Project
                {
                    Name = "Illustrated Book Covers",
                    Description = "Illustrated Book Covers",
                    ImageUrl = "/images/projects/05 Illustrated book covers.jpg",
                    Category = "Illustration"
                },
                new Project
                {
                    Name = "Better with a Biscuit Logo",
                    Description = "Better with a Biscuit Logo",
                    ImageUrl = "/images/projects/06 Better with a Biscuit logo.png",
                    Category = "Branding"
                },
                new Project
                {
                    Name = "Yoga Studio Window Mural",
                    Description = "Yoga Studio Window Mural",
                    ImageUrl = "/images/projects/07 Yoga window mural.jpg",
                    Category = "Mural"
                },
                new Project
                {
                    Name = "Drummer Character Illustration",
                    Description = "Drummer Character Illustration",
                    ImageUrl = "/images/projects/08 Drummer character illustration.png",
                    Category = "Illustration"
                }
            };

            foreach (var project in projects)
            {
                context.Projects.Add(project);
            }

            context.SaveChanges();
        }
    }
}