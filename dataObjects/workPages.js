export const workPages = {
    travel: {
        title: 'Travel Blogger',
        description: 'Redefining the travel writing experience',
        mainImage: '../travel_test.png',
        githubLink: 'https://github.com/gcn12/photo-app',
        projectLink: 'https://gcn12.github.io/photo-app',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'Travel Blogger is a full-featured app that allows users to post articles, connect with others, and plan their next vacation. Instead of creating their own website, a traveler can easily create and account and begin posting articles in seconds. Those looking for inspiration can browse posts, search by desination, and add articles to their collections. \n \n Behind the scenes, the app uses Firebase Cloud Functions and Security on the backend.', 
            },
            // {
            //     type: 'section',
            //     header: 'Project key features',
            //     paragraph: 'A dictumst diam quis maecenas elementum, euismod viverra dictum. Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut.', 
            // },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Firebase', 'Algolia Search', 'Framer Motion', 'React-Router', 'Redux', 'Styled Components', 'Google Places API'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'Diving deeper into Firebase opened up new possibilities while causing some frustrations', 
            },
            {
                type: 'photo',
                link: '../travel_multiple.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Page layout',
                paragraph: 'A significant amount of time was put into the article designs. Each post displays the title, location, along with user-written paragraphs and photos. Users can heart a post, save it to read later, or add to a collection. Finally, suggested articles are provided for further reading.', 
                photoLink: '../travel_full_2.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Save posts',
                paragraph: 'Users can save posts to read later and can add them to collections.', 
                photoLink: '../travel_add_to_collection_save.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Full text search',
                paragraph: 'With Algolia integration, users can search for places, posts, and other travelers. Search results are updated for every post uploading and for every user who signs up.', 
                photoLink: '../travel_full_search.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'It was towards the end of this project where I began learning about web accessibility.', 
            },
            {
                type: 'photo',
                link: '../travel_collections.png',
            },
            {
                type: 'photo',
                link: '../travel_edit_profile.png',
            },
            {
                type: 'photo',
                link: '../travel_user_page.png',
            },
            {
                type: 'photo',
                link: '../travel_explore2.png',
            },
            {
                type: 'photo',
                link: '../travel_saved_posts.png',
            },
        ],
    },
    timer: {
        title: 'Rubik\'s Cube Puzzle Timer',
        description: 'Innovative timer for the puzzle-solving community',
        mainImage: '../timer.png',
        githubLink: 'https://github.com/gcn12/cubeclock',
        projectLink: 'https://cubeclock.net',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'CubeClock is an innovative, modern puzzle timer. The app was designed with input from the puzzle-solving community in order to fit their needs. \n \n The backend features integration with PostgresQL, which allows users to create accounts and to save their solve data. To protect the user, passwords are hashed and salted with bcrypt. \n \n A unique feature is the integration of Progressive Web App technology. This allows the app to run offline. A user can select the offline mode, which downloads their data. Subsequent data is saved to the device and then uploaded to the database when the user reconnects.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Postgres', 'Express', 'Chart.js', 'Grid.js', 'Moment.js', 'bcrypt'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'I was in the process of learning web development during the creation of this app. The idea of incorporating a front-end, back-end, and a user interface was challenging, and at times overwhelming. \n \n To complete the project, I referenced a web development course, which provided a solid foundation on the topic. The process resulted in a lot of research and experimentation to fully understand how to build a complete app.', 
            },
            {
                type: 'photo',
                link: '../timer_3.png',
            }, 
            {
                type: 'photoDescriptionLeft',
                header: 'Multiple Puzzle Support',
                paragraph: 'A highly requested feature was the ability to use any World Cube Association puzzle. Puzzles have unique mechanics, therefore requiring different scrambling algorithms. CubeClock makes note of which puzzle is being solved in order to present analyticsand to preserve specific solve data.', 
                photoLink: '../timer_puzzles_list.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'User preferences',
                paragraph: 'CubeClock allows users to customize the app to their tastes. Options include inspection times, the ability to display average times, and various ways of inputting their solve data. \n \n Many puzzle enthusiasts may already have their data saved elsewhere. CubeClock makes it effortless to import and save data, as well as export data to create a backup.', 
                photoLink: '../timer_preferences.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Save every session',
                paragraph: 'Users can create unlimited sessions--a way to categorize multiple solves by puzzle and date. Sessions can be returned to, allowing a solver to pick up where they left off.', 
                photoLink: '../timer_sessions.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Track progress',
                paragraph: 'Collected and stored data is presented in the form of charts. Solvers can visualize trends in the times and solve frequency. To provide more specific results, charts can be sorted by puzzle type and date.', 
                photoLink: '../timer_analytics.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'Looking back on this project, there are a number of improvements that can be made. This was my first real development project, and created when I only had a month or two of experience. The largest inefficiency is that data is stored in a single PostgresQL row. As a result, all of the user\'s data must be downloaded at login, and reuploaded after every solve. Another issue is that all session data, such as averages, are recalculated when a user visits the dashboard. This is problematic because a user may only need to see a select few sessions, rather than all of them. The calculations being run are also intenstive on the JS engine, since there are a number of nested loops, resulting in quadratic time complexities. \n \n The design of the app also leaves something to be desired, as the white and black color combination provides little depth to the interface. In the future, the layout and color schemes could be improved upon to deliver a satisfying user experience.', 
            },
        ],
    },
    cinematography: {
        title: 'Cinematography Portfolio',
        description: 'Personal portfolio website',
        mainImage: '../cine.png',
        githubLink: 'https://github.com/gcn12/film-portfolio',
        projectLink: 'https://gcn12.github.io/film-portfolio',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'This project was a static website to showcase my cinematography work. It needed to play video from Vimeo and YouTube, and display each project individually. Stylistically, the site needed to be clean and minimalistic. ', 
            },
            {
                type: 'section',
                header: 'Project features',
                paragraph: 'A dictumst diam quis maecenas elementum, euismod viverra dictum. Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Styled-Components', 'React-Router', 'Redux', 'Flickr Photo API'],
            },
            {
                type: 'photo',
                link: '../cine_2.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'New UI design',
                paragraph: 'Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
                photoLink: '../cinematography_full_page.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'New UI design',
                paragraph: 'Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
                photoLink: '../cinematography_work_desktop.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'New UI design',
                paragraph: 'Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
                photoLink: '../cinematography_still_gallery.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'New UI design',
                paragraph: 'Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
                photoLink: '../cinematography_homepage.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'It was towards the end of this project where I began learning about web accessibility.', 
            },
        ],
    },
    messaging: {
        title: 'Messaging App',
        description: 'Fast, reliable instant messaging',
        mainImage: '../messaging_main.png',
        githubLink: 'https://github.com/gcn12/messaging-app',
        projectLink: 'https://gcn12.github.io/messaging-app/',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, dictumst diam quis maecenas elementum, euismod viverra dictum. Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
            },
            {
                type: 'features',
                header: 'Project features',
                points: ['fjeife', 'eifie', 'efifeh']
            },
            {
                type: 'test',
                header: 'Project features',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, dictumst diam quis maecenas elementum, euismod viverra dictum. Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Google Realtime Database', 'Redux', 'Moment.js', 'Styled-Components'],
            },
            {
                type: 'photo',
                link: '../messages_2.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'New UI design',
                paragraph: 'Tellus tristique adipiscing blandit congue faucibus ut tortor. Elementum sit etiam vestibulum tincidunt a pulvinar pharetra, eleifend. Vel velit elementum diam interdum viverra duis ut. Blandit turpis tincidunt etiam ultrices scelerisque. Mauris, nunc nulla accumsan tellus purus tincidunt viverra magna.', 
                photoLink: '../messaging_seen.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'It was towards the end of this project where I began learning about web accessibility.', 
            },
        ],
    },
}