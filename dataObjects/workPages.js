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
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Firebase', 'Algolia Search', 'Framer Motion', 'React-Router', 'Redux', 'Styled Components', 'Google Places API'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'Deciding on the right backend was among the largest challenge. The app needed to handle authentication, the ability to upload photos, and integrate easily with a full-text search. It was determined that Google\'s Firebase provided the right features at a reasonable price. \n \n In addition to storing data and handling authentication, Firebase provides security features and server-side functions. With an app of this size, containing potentially thousands of users, data has to be kept up to date and secure. By using Cloud Functions, the app can create transactions to make sure actions take place in the right order, and can prevent users from performing unwanted tasks, such as artificially increasing an article\'s view count. Cloud Functions were also implemented to perform data management tasks. For example, if a user changes their username, the Cloud Function can update the new name across all instances of it.', 
            },
            {
                type: 'photo',
                link: '../travel_multiple.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Page layout',
                paragraph: 'Each post displays the title, location, along with user-written paragraphs and photos. Users can heart a post, save it to read later, or add to a collection. Finally, suggested articles are provided for further reading.', 
                photoLink: '../travel_full_2.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Save posts',
                paragraph: 'If a user finds a post they are particularly drawn to, they can add it to a collection or save it to read later.', 
                photoLink: '../travel_add_to_collection_save.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Full-text search',
                paragraph: 'With Algolia integration, users can search for places, posts, and other travelers. Search results are updated for every post uploaded and for every user who signs up.', 
                photoLink: '../travel_full_search.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'The largest flaw is the lack of accessibility. There are a number of areas where a keyboard-only user may not be able to use. Accessibility is something that I began learning about near the end of the project and was therefore unable to implement. Moving forward, create accessible apps will be a priority. \n \n Another improvement could be the overall architecture of the program, in both the front-end and back-end. The original idea for the app was much simpler, but then grew to include more features, many of which interconnected. In creating a larger project, the code became more complex and less organized. In future projects, a clearer idea of the end result will provide a structure and ensure a higher quality of code.', 
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
            {
                type: 'photo',
                link: '../travel_add_collection.png',
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
                paragraph: 'This project was a static website to showcase my cinematography work. It needed to play video from Vimeo and YouTube, and display each project individually. Stylistically, the site needed to be clean and minimalistic.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Styled-Components', 'React-Router', 'Redux', 'Flickr Photo API'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'The key challenge was finding a way of easily uploading and accessing photos of different resolutions. Ideally, photos could be grouped and accessed based on project. \n \n Flickr\'s photo APIs was the answer. It is easy to upload multiple photos and can categorize them into albums. Those albums can be accessed by the front-end to display the photos. An extra feature Flickr provides is that each photo is available at multiple resolutions. In this project, smaller resolutions are used for the thumbnails and larger ones are used for the gallery.', 
            },
            {
                type: 'photo',
                link: '../cine_2.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Project display',
                paragraph: 'Each piece of work contains a title, video, and a number of still images from the project. Videos can be embedded from YouTube or Vimeo and maintain their aspect ratio. If desired, custom video thumbnails can be used.', 
                photoLink: '../cinematography_full_page.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Work page',
                paragraph: 'Projects are displayed as thumbnails in a grid. When hovered, visitors can see the project name.', 
                photoLink: '../cinematography_work_desktop.png',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Stills gallery',
                paragraph: 'Images from the project pages can be enlarged and viewed through a gallery. When hovered, the image provides arrows to access the previous and next photos. Alternatively, the keyboard arrow keys can be used to navigate through the photos.', 
                photoLink: '../cinematography_still_gallery.png',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Home page',
                paragraph: 'Visitors to the site are immediately shown a cinematography highlight reel. A custom play button and thumbnail are displayed on top of an embedded Vimeo video.', 
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
                paragraph: 'This app was intended to be a fully-fuctioning instant messenger. It allows users to easily sign up--with an email or a Google account--and instantly send messages to other users. \n \n One of the key features is the ability to send message requests, which can be accepted or declined. By hovering over a message, users can see when the message was send. In the side panel, different conversations can be selected, allowing users to pick up where they left off. \n \n In order to facilitate fast messaging, Google\'s Realtime Database was chosen as the backend solution. It provides near-instant updates whenever a user sends a message or a request, and also handles authentication.', 
            },
            {
                type: 'features',
                header: 'Project features',
                points: ['fjeife', 'eifie', 'efifeh']
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
                header: 'Know when you\'ve been seen',
                paragraph: 'Integration with the Realtime Database means that users can see when their messages have been read by the recipient.', 
                photoLink: '../messaging_seen.png',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'Design and functionality are two weaknesses of this app. Overall, there is a lack of depth and contrast in the interface. The colors could be more vibrant and inviting in order to enhance a user\'s experience. \n \n Fundamentally, this app doesn\'t have any features that are not available with other services. Ideally a project will add something new to the table. In future projects, more time should be spent on figuring out what features potential users may want in order to present a positive experience.', 
            },
        ],
    },
}