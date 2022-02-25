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
                    Name = "Project1",
                    Description = "Project1 description",
                    ImageUrl = "/images/projects/project1.png",
                    Category = "Category1"
                },
                new Project
                {
                    Name = "Project2",
                    Description = "Project2 description",
                    ImageUrl = "/images/projects/project2.png",
                    Category = "Category2"
                },
                new Project
                {
                    Name = "Project3",
                    Description = "Project3 description",
                    ImageUrl = "/images/projects/project3.png",
                    Category = "Category3"
                },
                new Project
                {
                    Name = "Project4",
                    Description = "Project4 description",
                    ImageUrl = "/images/projects/project4.png",
                    Category = "Category4"
                },
                new Project
                {
                    Name = "Project5",
                    Description = "Project5 description",
                    ImageUrl = "/images/projects/project5.png",
                    Category = "Category5"
                },
                new Project
                {
                    Name = "Project6",
                    Description = "Project6 description",
                    ImageUrl = "/images/projects/project6.png",
                    Category = "Category6"
                },
                new Project
                {
                    Name = "Project7",
                    Description = "Project7 description",
                    ImageUrl = "/images/projects/project7.png",
                    Category = "Category7"
                },
                new Project
                {
                    Name = "Project8",
                    Description = "Project8 description",
                    ImageUrl = "/images/projects/project8.png",
                    Category = "Category8"
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