export const workPages = {
    travel: {
        title: 'Voyager',
        description: 'Redefining the travel writing experience',
        mainImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel2.png?alt=media&token=a6edda5b-c440-4fe7-b9f4-511b2e1ca3a4',
        githubLink: 'https://github.com/gcn12/photo-app',
        projectLink: 'https://gcn12.github.io/photo-app',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'Voyager is a full-featured app that allows users to post articles, connect with others, and plan their next vacation. This app saves travelers the work of creating their own websites. Instead, they can create an account and begin posting articles in minutes. Those looking for inspiration can browse posts, search by desination, and add articles to their collections.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Firebase', 'Algolia Search', 'Framer Motion', 'React-Router', 'Redux', 'Styled Components', 'Google Places API'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'Deciding on the right backend was a difficult task. The app needed to handle authentication, the ability to upload photos, and integrate easily with a full-text search. After researching, it was determined that Google\'s Firebase provided the right features at a reasonable price. \n \n In addition to storing data and handling authentication, Firebase provides security features and server-side functions. With an app of this size, containing potentially thousands of users, data has to be kept up to date and secure. With Cloud Functions, the app uses transactions to make sure tasks are performed in the right order. They can prevent unwanted behavior, such as artificially increasing an article\'s view count. Cloud Functions were also implemented to handle data changes. For example, a user\'s username may be stored across multiple documents. Cloud Functions can update every instance of that username in the back-end.', 
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel.png?alt=media&token=879d829b-1cee-48c9-bc31-aa3584ff6e06',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Page layout',
                paragraph: 'Each post displays the title, location, along with user-written paragraphs and photos. To further personalize posts, users can choose from a variety of fonts. After reading an article, users can give it a heart, save it to read later, or add it to a collection. At the bottom of each post, suggested articles are provided for further reading.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_full_2.png?alt=media&token=69775d39-6c0b-447f-bdb1-5c8d22796d93',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Save posts',
                paragraph: 'If a user finds a post they are particularly drawn to, they can add it to a collection or save it to read later.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_add_to_collection_save.png?alt=media&token=9bd1e416-b1c5-4deb-83c0-6de7071e0430',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Full-text search',
                paragraph: 'Integration with Algolia enables searching through places, posts, and other travelers. Search results are updated for every post uploaded and for every user who signs up.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_full_search.png?alt=media&token=0cbd752b-bfe5-49f6-89b4-00c5cb0f834e',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'The largest flaw is the lack of accessibility. There are a number of areas a keyboard-only user may not be able to use. Accessibility is something that I began learning about near the end of the project, so moving forward, creating accessible apps will be a priority. \n \n Another improvement could be the overall architecture of the program, in both the front-end and back-end. The original idea for the app was much simpler, but then grew to include more features, many of which interconnected. In creating a larger project, the code became more complex and less organized. In future projects, careful planning will provide a solid app structure and ensure a higher quality of code.', 
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_collections.png?alt=media&token=8ba5ca39-99f5-4c36-8afa-caac497f88e4',
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_user_page.png?alt=media&token=77363529-36b3-40b2-97e5-8fd5ba1fa694',
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_edit_profile.png?alt=media&token=16ecc020-cef1-421b-9f4d-9f30dce5cbaf',
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_explore2.png?alt=media&token=835da03f-e63c-4929-a1e6-657b3a8d2ea1',
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_saved_posts.png?alt=media&token=6d6de59f-bd10-4984-9372-19ce6d63546f',
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/travel%2Ftravel_add_collection.png?alt=media&token=f88d31df-748f-4152-b05a-999d46623fb4',
            },
        ],
    },
    timer: {
        title: 'Rubik\'s Cube Puzzle Timer',
        description: 'Innovative timer for the puzzle-solving community',
        mainImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer%202.png?alt=media&token=9c1fc278-d076-41fd-9330-41ab89d5ebaf',
        githubLink: 'https://github.com/gcn12/cubeclock',
        projectLink: 'https://cubeclock.net',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'CubeClock is an innovative, modern puzzle timer. The app was designed with input from the puzzle-solving community in order to fit their needs. \n \n The backend features integration with PostgresQL, which allows users to create accounts and to save their solve data. To protect the user\'s information, passwords are hashed and salted with bcrypt. \n \n A unique feature is the integration of Progressive Web App technology, allowing the app to run offline. A user can select the offline mode, which downloads their data. Newly-created data is saved to the device and then uploaded to the database when the user reconnects.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Postgres', 'Express', 'Chart.js', 'Grid.js', 'Moment.js', 'bcrypt'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'I was in the process of learning web development during the creation of this app. The idea of creating a full-stack app was challenging, and at times overwhelming. \n \n To complete the project, I referenced a web development course, which provided a solid foundation on the topic. The course, along with a lot of research and experimentation, enabled the creation of the finished app.', 
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer.png?alt=media&token=8386a7a9-588e-43ef-8d51-76536d9afc3d',
            }, 
            {
                type: 'photoDescriptionLeft',
                header: 'Multiple Puzzle Support',
                paragraph: 'A highly requested feature was the ability to use any World Cube Association puzzle. Puzzles have unique mechanics, therefore requiring different scrambling algorithms. Users can select a puzzle of their choice, which allows CubeClock to deliver analytics and to preserve specific solve data.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer_puzzles_list.png?alt=media&token=900143b9-b7e5-4e46-a4c9-67aaceef86ad',
            },
            {
                type: 'photoDescriptionRight',
                header: 'User preferences',
                paragraph: 'CubeClock allows users to customize the app to their tastes. Options include inspection times, the ability to display averages, and various ways of inputting their solve times. \n \n Many puzzle enthusiasts already have their data saved elsewhere. CubeClock makes it effortless to import and export data.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer_preferences.png?alt=media&token=8bad09aa-2a4f-4145-b4c9-04e544c7a890',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Save every session',
                paragraph: 'Users can create unlimited sessions--a way of categorizing multiple solves by puzzle and date. Sessions can always be returned to, allowing a solver to pick up where they left off.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer_sessions.png?alt=media&token=fa221d3d-282f-462a-aebb-414f0c599faa',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Track progress',
                paragraph: 'Collected and stored data is presented in the form of charts. Solvers can visualize trends in their times and in their solve frequency. To provide more specific results, charts can be sorted by puzzle type and date.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/timer%2Ftimer_analytics.png?alt=media&token=57887378-9c46-4794-b231-e3949fb782a3',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'Looking back on this project, there are a number of improvements that can be made. This was my first real development project, and was created when I only had a month or two of experience. The largest inefficiency is that data is stored in a single PostgresQL row. As a result, all of the user\'s data must be downloaded at login and reuploaded after every solve. This can slow down the start times of the app and also causes unnecessary data transfers. \n \n Another issue is that all session data, such as averages, are recalculated when a user visits the dashboard. This is problematic because a user may only need to see a select few sessions, rather than all of them. The calculations being run are also intenstive on the JS engine, since there are a number of nested loops. \n \n The design of the app also leaves something to be desired, as the white and black color combination provides little depth to the interface. In the future, the layout and color schemes could be improved upon to deliver a satisfying user experience.', 
            },
        ],
    },
    cinematography: {
        title: 'Cinematography Portfolio',
        description: 'Personal portfolio website',
        mainImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcine.png?alt=media&token=d11bf406-bd28-4fe5-8b91-c2fae3bfee19',
        githubLink: 'https://github.com/gcn12/film-portfolio',
        projectLink: 'https://gcn12.github.io/film-portfolio',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'This project was a static website to showcase my cinematography work. It needed to play videos from Vimeo and YouTube, and display each project individually. Stylistically, the site needed to be clean and minimalistic to keep the focus on the work itself.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Styled-Components', 'React-Router', 'Redux', 'Flickr Photo API'],
            },
            {
                type: 'section',
                header: 'Challenges and solutions',
                paragraph: 'The key challenge was finding a way of easily uploading and accessing photos of different resolutions. Ideally, photos could be grouped and accessed based on project. \n \n Flickr\'s photo APIs were the answer. It is easy to upload multiple photos and categorize them into albums. Those albums can then be accessed by the front-end to display the photos. Flickr also resizes images into different resolutions, removing the need to do it manually. In this project, smaller resolutions are used for the thumbnails and larger ones are used for the gallery.', 
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcine2.png?alt=media&token=02b44bad-72dd-4595-97be-32526a20b3f7',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Project display',
                paragraph: 'Each piece of work contains a title, video, and a number of still images from the project. Videos can be embedded from YouTube or Vimeo while maintaining their aspect ratio. Custom video thumbnails are used to enhance the presentation.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcinematography_full_page.png?alt=media&token=53be8fc5-c855-4845-b23a-7305e266c17c',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Work page',
                paragraph: 'Projects are displayed as thumbnails in a grid. When hovered, visitors can see the project name. On mobile devices, project names are displayed by default.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcinematography_work_desktop.png?alt=media&token=cd30fa6b-5846-4e91-8a11-57f6884714ae',
            },
            {
                type: 'photoDescriptionRight',
                header: 'Stills gallery',
                paragraph: 'Images from the project pages can be enlarged and viewed through a gallery. When hovered, the image provides arrows to navigate through photos. If preferred, the keyboard arrow keys can also be used.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcinematography_still_gallery.png?alt=media&token=0c55d854-26bb-4b00-819e-2fd59ea29d80',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Home page',
                paragraph: 'Visitors to the site are immediately presented with a cinematography highlight reel. A custom play button and thumbnail are displayed on top of an embedded Vimeo video.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/cine%2Fcinematography_homepage.png?alt=media&token=db0f819c-b4f9-45e6-966c-ea74b27d294b',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'In the original version of this site, a lot of CSS styling was overcomplicated and sometimes unnecessary. Other styles that were not set correctly, such as grids resulted in mismatched margins. In a recent refactor, these improvements have been made. \n \n Redux is something that could likely be removed as all state management requirements can be handled by React itself. Although Redux was used to make the code cleaner, in this case its inclusion has made the project more complicated.', 
            },
        ],
    },
    messaging: {
        title: 'Pigeon',
        description: 'Fast, reliable instant messaging',
        mainImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/messaging%2Fmessaging.png?alt=media&token=18bde9d6-c431-45ec-a5a1-4ae6cf7fb222',
        githubLink: 'https://github.com/gcn12/messaging-app',
        projectLink: 'https://gcn12.github.io/messaging-app/',
        content: [
            {
                type: 'section',
                header: 'Project overview',
                paragraph: 'Pigeon was intended to be a fully-fuctioning instant messenger. It allows users to easily sign up--with an email or Google account--and instantly send messages to others. \n \n One of the key features is the ability to send message requests, which can then be accepted or declined. By clicking on a message bubble, users can see when the message was sent. In the side panel, different conversations can be selected, allowing users to pick up where they left off. \n \n In order to facilitate fast messaging, Google\'s Realtime Database was chosen as the backend solution. It provides near-instant updates for messages and requests, and also handles authentication.', 
            },
            {
                type: 'createdWith',
                header: 'Created with these technologies',
                items: ['React.js', 'Google Realtime Database', 'Redux', 'Moment.js', 'Styled-Components'],
            },
            {
                type: 'photo',
                link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/messaging%2Fmessaging2.png?alt=media&token=2144fbe1-30ec-4c2a-86c5-c47323e0beb3',
            },
            {
                type: 'photoDescriptionLeft',
                header: 'Know when you\'ve been seen',
                paragraph: 'Integration with the Realtime Database means that users can see when their messages have been read by the recipient.', 
                photoLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/messaging%2Fmessaging_seen.png?alt=media&token=374427f3-a17b-4730-bccf-0290f060c2fd',
            },
            {
                type: 'section',
                header: 'Future improvements and key takeaways',
                paragraph: 'Design and functionality are two weaknesses of this app. Overall, there is a lack of depth and contrast in the interface. The colors could be more vibrant and inviting in order to enhance a user\'s experience. \n \n Fundamentally, this app doesn\'t have any features that are not available with other services. Ideally a project should add something new to the table. In future projects, more time should be spent on determining innovative features in order to present a positive experience.', 
            },
        ],
    },
}