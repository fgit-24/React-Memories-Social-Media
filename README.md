# Time

![Am I responsive]()


## Introduction

[Time](https://time-frontend-871b3764ee9c.herokuapp.com/) is a platform for sharing photos, designed for individuals who wish to showcase their images with others.

You can find the backend for this application here: [Time Backend](https://pp5-api-f-176f17fcc3bf.herokuapp.com/)

In addition to uploading your own content, all photos submitted to the website can be downloaded by any user.

The goal is to foster a sharing community where you can either contribute content or simply browse through the creations of others.

You can also participate in the community by leaving comments and likes, as well as curating collections for yourself by adding posts to your private albums, making it easy to locate your favorite posts.


## Table of Contents

- [tTime](#Time)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Personas](#user-personas)
  - [User Stories](#user-stories)
  - [User Goals](#user-goals)
    - [The Casual](#the-casual)
    - [Amateur Photographer](#the-amateur-photographer)
    - [The Enthusiast](#the-enthusiast)
  - [Website Owner Goals](#website-owner-goals)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Fonts](#fonts)
    - [Colors](#colors)
  - [Screenshots of Finished Website](#screenshots-of-finished-website)
  - [Features](#features)
  - [Features to Add](#features-to-add)
  - [React Components](#react-components)
    - [Reusable Components](#reusable-components)
    - [Report Component](#report-component)
    - [Contexts](#contexts)
    - [Hooks](#hooks)
    - [API](#api)
    - [Pages](#pages)
      - [Albums](#albums)
      - [Auth](#auth)
      - [Comments](#comments)
      - [Posts](#posts)
      - [Profiles](#profiles)
  - [Framework and Languages](#framework-and-languages)
  - [Libraries](#libraries)
  - [Deployment](#deployment)
    - [Cloning and Forking](#cloning-and-forking)
  - [Testing](#testing)
    - [Validation](#validation)
    - [Lighthouse Reports](#lighthouse-reports)
    - [Responsiveness](#responsiveness)
    - [Manual Testing](#manual-testing)
      - [Navbar](#navbar)
      - [Search Bar](#search-bar)
      - [Home Page](#home-page)
      - [Post Detail](#post-detail)
      - [Edit Post](#edit-post)
      - [Delete Post](#delete-post)
      - [Add Post](#add-post)
      - [Liked Posts](#liked-posts)
      - [Albums](#albums-1)
      - [Edit Album](#edit-album)
      - [Delete Album](#delete-album)
      - [Album Detail](#album-detail)
      - [Profile](#profile)
      - [Edit Profile](#edit-profile)
      - [Register](#register)
      - [Sign In](#sign-in)
    - [User Stories Testing](#user-stories-testing)
      - [Navigation](#navigation)
      - [Authentication](#authentication)
      - [Posts](#posts-1)
      - [Search](#search)
      - [Infinite Scroll](#infinite-scroll)
      - [Comments](#comments-1)
      - [Albums](#albums-2)
      - [Profiles](#profiles-1)
  - [Bugs](#bugs)
    - [Bug](#bug)
  - [Bug Fixes](#bug-fixes)
    - [Bug Fix](#bug-fix)
  - [Remaining Bugs](#remaining-bugs)
    - [Search Bar Issue](#search-bar-issue)
  - [Credits](#credits)
    - [Projects](#projects)
    - [Websites](#websites)
    - [People](#people)


## User Personas

- The **casual user**, enjoys browsing through stunning photos for relaxation and inspiration.

  They appreciate discovering new photography styles and occasionally download images for personal use.

  hey value the convenience of saving their favorite photos in albums for easy access later.

- The **enthusiast** is dedicated to collecting and organizing everything. They enjoy curating  
  collections to showcase to family and friends.

  It should be simple to add albums and posts, as they frequently log in to explore, download, and manage their private albums.

- The **amateur photographer** seeks to share their images with others to receive feedback.

  They take pleasure in observing how their work is perceived and the opportunity to contribute to the community.

  The platform provides them with straightforward upload options and visibility.

  Being able to organize their own and others' content into albums is a significant advantage.


## User Stories

My user stories that inspired the development of this website are available in this
[GitHub Project]().

Each issue includes an Epic, User Story, Acceptance Criteria, and Tasks.

I utilized Agile methodology through labels, milestones, and GitHub Projects to organize my work.

For a complete overview, please refer to the Project link. Here’s a brief summary of my user stories:

- Authentication

  - As a Site User I can access a navbar from every page so that I can navigate the site
    easily.

  - As a Site User I can register an account so that I can access more features.

  - As a Site User I can sign in so that I get access to additional features.

  - As a Site User I can see my logged in status so that I can log out if I need to.

  - As a Site User I can remain logged in for some time, or until I log out so that I have a
    good experience.

- Comments

  - As a Site User, I can add comments to a post to engage with the community.

  - As a Site User, I can view comments to see what other users think about the post.

  - As a Site User, I can delete my comments if I choose to remove them.

  - As a Site User, I can edit my comments to make any necessary changes.

  - As a Site User, I can like comments to indicate that I appreciate what others have said.

  - As a Site User, I can unlike a comment if I decide to change my mind.

- Posts

  - As a Site User, I can create posts to share my content.

  - As a Site User, I can view an individual post to interact with it.

  - As a Site User, I can like a post to express my appreciation.

  - As a Site User, I can download an image from a post to save it for later.

  - As a Site User, I can view a feed of posts to stay updated with the latest content.

  - As a Site User, I can see posts I have liked, making it easy to return to them.

  - As a Site User, I can search for posts to find the content I’m interested in.

  - As a Site User, I can scroll infinitely so I never need to click to the next page to view more posts.

  - As a Site User, I can delete my post if I choose to remove it.

  - As a Site User, I can edit my post to make any changes I want.

- Profiles

  - As a Site User, I can visit other users' profiles to learn more about them.

  - As a Site User, I can edit my profile to modify what information is visible to other users.

- Albums

  - As a Site User, I can create albums to help me stay organized.

  - As a Site User, I can view my albums to interact with them.

  - As a Site User, I can delete my albums if I wish to remove them.

  - As a Site User, I can edit my albums to change their names if needed.

  - As a Site User, I can add posts to albums to organize content as I prefer.

  - As a Site User, I can view the posts I have added to my albums, making it easy to locate specific content.


## User Goals

### The Casual

They seek to explore new photography styles and trends.

The enjoyment of scrolling for relaxation is a significant reason for their presence here.

### The Amateur Photographer

These users aim to upload and share their content with the community.

Feedback is crucial for them, obtained through likes, comments, and tracking how often their work has been downloaded.

The site provides them with exposure for their work.

### The Enthusiast

The enthusiast is motivated by curating beautiful works.

They take pride in discovering outstanding pieces and organizing them into albums.


## Website Owner Goals

Here’s a rephrased version of your text while keeping the original meaning and markdown formatting:

The owner is motivated by the goal of increasing traffic to the website.

The more users that visit the site, the more they can develop features to enhance the experience for current users while also attracting new ones.

This could lead to higher ad revenues and potential subscription options.

Any added features must be chosen carefully to avoid alienating existing users.

The website needs to function well on both mobile devices and larger screens for user convenience.


## Design

### Wireframes

The wireframes below were created using [Figma](https://www.figma.com/).

I referenced these during my development, although some adjustments were made throughout the process.

![Home]()

![Sign in]()

![Register]()

![Signed in]()

![Profile]()

![Albums]()

### Fonts

The primary font I used is "Playfair Display SC," chosen for its elegant design.

I paired it with "Gelasio" for input fields and sections with more text to enhance readability.

I believe that these fonts together contribute to a refined and stylish aesthetic.

### Colors


## Screenshots of Finished Website

This is the home page, with a user signed in.

![Home page]()

On the post detail page there are comments and ability to add post to an album.

![Post Detail]()

When you go to add a post, there is a nice preview of your selected photo.

![Add Post]()

The dropdown for a signed in user applies both in the main navbar and the offcanvas on small devices.

![Menu Dropdown]()

This is the albums page, where users can manage their albums.

![Albums Page]()

On the profile page, is the users photo of choice, their username and a bio, followed by all their posts.

![Profile Page]()


## Features

- Navbar is active, to display where you are on the website.

  This helps make navigation easier.

![Navbar]()

- The responsive navbar expands on larger screens, minimizing clicks and enhancing site navigation.

![Responsive Navbar]()

- When users are signed in, their specific links are grouped under their name, reducing clutter for a cleaner look while making it easier to locate their items.

![Navbar User Dropdown]()

- The search field is a valuable tool for users looking to find specific content.

![Search]()

- The post feeds feature infinite scrolling, loading new posts as users reach the bottom, allowing them to avoid clicking between pages.

![Infinite Scroll]()

- Users can hover over an avatar to instantly see the corresponding username, providing more information with fewer clicks.

![Avatar Hover]()

- Beneath each post, additional details are available, such as likes, comments, downloads, and image descriptions. 

  This helps users gauge the performance of their posts. Furthermore, this section includes options to like or download the image and displays the last update time for the post.

![Post info]()

- Users can report inappropriate posts, contributing to a more user-friendly site.

![Report Post]()

- While viewing a single post, users can easily add it to one of their albums through a dropdown menu, facilitating content curation.

![Add Post to Album]()

- The comment section appears just below where a post can be added to an album, allowing users to participate in discussions about the post. 

  Comments can be liked, and the owners can edit or delete their contributions.

![Comment Section]()

- A small dropdown arrow toggle is available throughout the website, providing a menu for users to edit or delete their content. 

  This feature only appears on items they are authorized to modify, such as posts, comments, albums, and their profile.

![Owner Dropdown]()

- Success toast notifications are implemented in relevant areas, reassuring users that their actions were successful.

![Success Toast]()

- If an error occurs, a toast notification will inform users that something went wrong, helping them understand why their actions didn’t yield the expected results.

![Error Toast]()

- On the Liked Posts page, users can view all the posts they have liked, offering a quick way to save content, though organization is not as robust as with albums.

![Liked Posts]()

- For users who prefer to save content in an organized fashion, the albums page is the ideal destination. Here, they can create albums and save content as desired.

![Albums]()

- If users are unsure about the purpose of a page, there is a dropdown info panel they can click to learn more. This feature will be particularly helpful for new users.

![Albums Info]()

- Users can visit profiles, which display their profile image, username, and bio. All posts on this page belong to that profile owner.

  This is beneficial for various reasons, such as learning more about a user if they choose to include a bio or discovering more images from a favorite creator.

![User Profiles]()


## Features to Add

This is a list of features I would have liked to implement, but they were not included in the scope of this project. Additionally, this list is certainly not exhaustive.

- **Maintain Page Scroll**: When a user clicks on a post and then returns to the feed, they should be taken back to their previous position in the feed.

- **Default Albums**: Upon account creation, users could automatically receive one or more albums, such as a "Favorites" album.

- **Album Naming**: I intentionally allowed users to create albums without a title. In this case, the album defaults to "New Album," which can be renamed later. However, it may enhance the user experience to prevent duplicate album names. A possible feature to implement could be:

  If an album is given a title that already exists in their collection, such as "Album," the new one could be automatically renamed to "Album(1)," for instance.

- **Editing Posts in Albums**: Currently, there is no functionality for moving posts between albums or removing a post from an album. While albums can be renamed or deleted and a post can be added to multiple albums, the ability to transfer or delete a post from an album is not yet available. This is definitely a feature I would consider adding in the future.


## React Components

### Reusable Components

- **NavBar**: The navigation bar used throughout the application.

- **DropdownInfo**: This component expands when clicked, revealing a longer message. 

  It’s helpful for concealing lengthy text that might clutter the UI.

- **Avatar**: A component designed to display the user's profile image wherever needed.

- **ImageAsset**: Used for displaying post images as well as the profile image on the user’s profile.

- **SuccessToastNotification**: A notification utilized throughout the application to indicate successful user actions.

- **ErrorToastNotification**: A notification that informs users of specific errors, indicating that an action they attempted has failed.

- **OwnerDropdown**: A dropdown menu that provides item owners with options for additional actions.

### Report Component

- **Report**: This component is used to manage a form for reporting inappropriate posts.

### Contexts

- **CurrentUserContext**: This context helps manage the state of the current user across the application.

### Hooks

- **useToggleNavBar**: A hook designed to control the state of the navbar and the off-canvas menu.

### API

- **axiosDefaults**: Default settings for simplified API calls using Axios. 

  It configures a base URL, sets the content type, and allows sending cookies cross-site.

### Pages

#### Albums

The albums page comprises five distinct components.

- **Albums**: This component brings together the above components.

- **AlbumCard**: Displays individual albums.

- **AlbumCreateForm**: The input form for creating albums.

- **AlbumEditForm**: Shown when a user opts to edit an album.

- **AlbumDetail**: When a specific album is selected, this detail view showcases the posts contained within that album.

#### Auth

- **SignUpForm**: Manages the registration process for new users.

- **SignInForm**: Facilitates the sign-in procedure.

#### Comments

The comments section is divided into three components.

- **Comment**: Represents the actual content of a comment.

- **CommentCreateForm**: Responsible for adding new comments.

- **CommentEditForm**: A form used for editing existing comments.

#### Posts

The posts section is divided into five different components.

- **PostsFeed**: Utilized wherever a feed of posts is required, such as on the Home and Liked Posts pages.

- **Post**: Represents the actual post content.

- **PostCreateForm**: Handles the creation of new posts.

- **PostEditForm**: A form for modifying existing posts.

- **PostDetail**: Displays the post itself, includes the form input for adding it to an album, and shows associated comments.

#### Profiles

The profiles section consists of three components.

- **Profile**: Contains profile information, including the user's image, bio, and an option to edit.

- **ProfilePage**: Presents the profile information alongside a feed of the profile owner's posts.

- **ProfileEditForm**: A form for updating profile information.


## Framework and Languages

This project was developed using React 18.3.1, with JavaScript and JSX employed for coding.

The README is written in Markdown.


## Libraries

- **React-bootstrap**: Utilized for its comprehensive set of components, styles, and user-friendly interface.

- **Axios**: Employed for making requests to my API.

- **React-router-dom**: Used for routing capabilities and additional features such as `searchParams`, `useLocation`, and `useNavigate`. This was particularly beneficial for implementing toast notifications and navigating between pages.

- **React-infinite-scroll-component**: Since my API provides paginated data, this library was instrumental in establishing a continuous feed for users.


## Deployment

This section outlines the steps I took to deploy this React project.

1. In `package.json`, I added `"heroku-prebuild": "npm install -g serve"` to the scripts section. 

   This is necessary for serving the single-page application on Heroku.

2. I created a `Procfile` in the root directory and included `web: serve -s build`. 

   This informs Heroku that this is a web process and indicates how to serve our single-page application.

3. Visit [Heroku](https://www.heroku.com/) and sign in or register.

4. Create a new app by choosing a unique name, selecting your region, and clicking "create app."

5. Navigate to the "Deploy" tab and connect your GitHub account.

6. Search for the repository you want to deploy and click connect.

7. Click "Deploy branch."

### Cloning and Forking

If you wish to clone or fork this project, you can do so from my [GitHub repository](https://time-frontend-871b3764ee9c.herokuapp.com/).

Please note that this is only the front-end; you will need a back-end to run the application.

Refer to the [Back-end repository](https://pp5-api-f-176f17fcc3bf.herokuapp.com/) for more details on setting that up.

It’s advisable to start by setting up a virtual environment to avoid conflicts and potential issues.

**Cloning** the project means creating a local copy on your machine, allowing you to make changes without impacting the original repository.

**Forking** means creating a copy of the project in your own GitHub account, which allows you to propose changes to the original project or develop your own modified version.

- Since this project uses npm, it's good practice to do the same.

- Ensure you are in the root directory, then run `npm install`.

- In the `src` directory, open `axiosDefaults.js` and update `axios.defaults.baseURL` to your own API URL.


## Testing

### Validation

I ran all my pages through the [W3C markup validation service](https://validator.w3.org/#validate_by_uri) with no errors.

My custom CSS was checked using [jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input) with no errors.

My JavaScript and JSX was validated using [eslint](https://eslint.org/docs/latest/use/getting-started), passing.

### Lighthouse Reports

Below are the Lighthouse reports for my pages:

- **Home:**
  ![Home lighthouse]()

- **Post Detail:**
  ![Post detail lighthouse]()

- **Post Edit:**
  ![Post edit lighthouse]()

- **Liked Posts:**
  ![Liked posts lighthouse]()

- **Albums:**
  ![Albums lighthouse]()

- **Album Detail:**
  ![Album detail lighthouse]()

- **Profiles:**
  ![Profiles lighthouse]()

- **Profile Edit:**
  ![Profile edit lighthouse]()

- **Register:**
  ![Register lighthouse]()

- **Sign In:**
  ![Sign in lighthouse]()

### Responsiveness

The website was thoroughly tested during development to ensure optimal functionality across all screen sizes. 

The primary devices used for testing included:

- Desktop
- iPhone 12 Pro
- Google Pixel 7
- iPad

After deploying to Heroku, I conducted additional tests on:

- Google Pixel 8 Pro
- My personal desktop computer.

Browsers that were tested:

- Google Chrome
- Microsoft Edge
- Brave

### Manual Testing

All titles listed under "Works" were manually tested, with an "X" denoting successful functionality and "no" representing failure.

The final tests documented here were performed on the deployed version on Heroku.

#### Navbar

| Works                                                              | YES | NO  |
| ------------------------------------------------------------------ | :-: | --- |
| "Time" lead to Home page when clicked                             |  X  |     |
| Current page is active                                             |  X  |     |
| Current page is marked in bold text                                |  X  |     |
| Navbar collapses to hamburger on smaller screen                    |  X  |     |
| Hamburger icon expands when clicked                                |  X  |     |
| Links still work when navbar is collapsed                          |  X  |     |
| Conditional statement hides user specific links when not signed in |  X  |     |

#### Search Bar

| Works                                       | YES | NO  |
| ------------------------------------------- | :-: | --- |
| Search bar is displayed on Home page        |  X  |     |
| Search bar is displayed on Liked posts page |  X  |     |
| I can search for image tags                 |  X  |     |
| I can search for image title                |  X  |     |
| I can search for image owner                |  X  |     |

#### Home Page

| Works                                                                           | YES | NO  |
| ------------------------------------------------------------------------------- | :-: | --- |
| Page loads                                                                      |  X  |     |
| When I scroll to the bottom, new posts load automatically                       |  X  |     |
| When I click a post, it takes me to the post detail view                        |  X  |     |
| I can like a post straight from the post feed                                   |  X  |     |
| When I like a post, the like count is incremented                               |  X  |     |
| I can un-like a post straight from the post feed                                |  X  |     |
| When I un-like a post, the like count is decremented                            |  X  |     |
| If I click the comments icon, it takes me to the post detail view               |  X  |     |
| If I click the download icon, it opens a new tab where I can download the image |  X  |     |
| If I click the download icon, the download count is incremented                 |  X  |     |
| Unauthenticated users cannot press the download button                          |  X  |     |
| If I click the owners avatar, I am taken to their profile                       |  X  |     |

#### Post Detail

| Works                                                                                            | YES | NO  |
| ------------------------------------------------------------------------------------------------ | :-: | --- |
| Page loads                                                                                       |  X  |     |
| If I own the post, a dropdown is displayed next to my avatar                                     |  X  |     |
| The owner dropdown display choices for edit and delete                                           |  X  |     |
| I can like the post                                                                              |  X  |     |
| When I like the post, the like count is incremented                                              |  X  |     |
| I can un-like the post                                                                           |  X  |     |
| When I un-like the post, the like count is decremented                                           |  X  |     |
| If I click the comments icon, nothing happens                                                    |  X  |     |
| If I click the download icon, it opens a new tab where I can download the image                  |  X  |     |
| If I click the download icon, the download count is incremented                                  |  X  |     |
| Unauthenticated users cannot press the download button                                           |  X  |     |
| If I click the owners avatar, I am taken to their profile                                        |  X  |     |
| I can add the post to an album                                                                   |  X  |     |
| If I have no albums, the "save to album" button is disabled                                      |  X  |     |
| If I have no albums, the dropdown explains I have no albums yet                                  |  X  |     |
| If I try adding the post to an album without selecting one, there is an error toast notification |  X  |     |
| I can leave a comment                                                                            |  X  |     |
| I can edit my own comment                                                                        |  X  |     |
| I can delete my own comment                                                                      |  X  |     |
| I can like a comment                                                                             |  X  |     |
| When I like a comment, the like count increments                                                 |  X  |     |
| I can un-like a comment                                                                          |  X  |     |
| When I un-like a comment, the like count decrements                                              |  X  |     |
| When I report a post, there is a success notification if the form submits                        |  X  |     |
| When I report a post, there is an error notification if the form does not submit                 |  X  |     |

#### Edit Post

| Works                                                                    | YES | NO  |
| ------------------------------------------------------------------------ | :-: | --- |
| Page loads                                                               |  X  |     |
| A preview of my post image is displayed                                  |  X  |     |
| My old title is prefilled                                                |  X  |     |
| My old caption is prefilled                                              |  X  |     |
| My old tags are prefilled                                                |  X  |     |
| Cancel button takes me back to the post detail view                      |  X  |     |
| The form displays error messages if I do something wrong                 |  X  |     |
| When submitted my changes are saved                                      |  X  |     |
| When submitted I am taken back to the post detail view to see my changes |  X  |     |

#### Delete Post

| Works                                                           | YES | NO  |
| --------------------------------------------------------------- | :-: | --- |
| When selecting to delete my post, there is a confirmation modal |  X  |     |
| If i click cancel in the modal, it closes and nothing happens   |  X  |     |
| If I confirm the deletion, the post is deleted                  |  X  |     |
| After the post is deleted I am redirected to my profile         |  X  |     |
| After the deletion, a toast notification confirms the deletion  |  X  |     |

#### Add Post

| Works                                                                | YES | NO  |
| -------------------------------------------------------------------- | :-: | --- |
| Page loads                                                           |  X  |     |
| If a non logged in user tries to access the page they are redirected |  X  |     |
| Form displays messages to alert users of mistakes                    |  X  |     |
| Cancel button takes me back to the previous page I was on            |  X  |     |
| Uploaded image has a preview                                         |  X  |     |
| When the form is submitted I am redirected to the post detail view   |  X  |     |
| When the form is submitted there is a success toast notification     |  X  |     |

#### Sign In

| Works                                                       | YES | NO  |
| ----------------------------------------------------------- | :-: | --- |
| Page loads                                                  |  X  |     |
| The link to the register page takes me to the sign register |  X  |     |
| The form will not allow any blank fields                    |  X  |     |
| On successful sign in I am taken to the home page           |  X  |     |
| On successful sign in I can see my username in the navbar   |  X  |     |

#### Liked Posts

| Works                                               | YES | NO  |
| --------------------------------------------------- | :-: | --- |
| Page loads                                          |  X  |     |
| The page filters to display only posts I have liked |  X  |     |

#### Albums

| Works                                                                | YES | NO  |
| -------------------------------------------------------------------- | :-: | --- |
| Page loads                                                           |  X  |     |
| Page displays a dropdown with an explanation of how to use albums    |  X  |     |
| When the explanation dropdown is clicked it expands to show the text |  X  |     |
| If the dropdown is expanded and clicked, it collapses                |  X  |     |
| New albums can be created                                            |  X  |     |
| When an album is created I am redirected to the album detail view    |  X  |     |
| When an album is created there is a success toast notification       |  X  |     |
| Albums have a dropdown menu with edit and delete options             |  X  |     |
| Clicking an album takes me to the album detail view                  |  X  |     |

#### Edit Album

| Works                                                 | YES | NO  |
| ----------------------------------------------------- | :-: | --- |
| When choosing to edit an album, an edit form displays |  X  |     |
| The edit form has the old title prefilled             |  X  |     |
| Clicking cancel closes the form without changes       |  X  |     |
| Clicking save updates the album title                 |  X  |     |
| Clicking save closes the edit form                    |  X  |     |

#### Delete Album

| Works                                                           | YES | NO  |
| --------------------------------------------------------------- | :-: | --- |
| When choosing to delete an album, there is a confirmation modal |  X  |     |
| Clicking cancel in the modal, closes the modal                  |  X  |     |
| Clicking delete in the modal deletes the album                  |  X  |     |
| Clicking delete in the modal closes the modal                   |  X  |     |
| At deleting the album a success toast notification shows up     |  X  |     |

#### Album Detail

| Works                                               | YES | NO  |
| --------------------------------------------------- | :-: | --- |
| Page loads                                          |  X  |     |
| The album detail displays posts added to that album |  X  |     |

#### Profile

| Works                                                          | YES | NO  |
| -------------------------------------------------------------- | :-: | --- |
| Page loads                                                     |  X  |     |
| Profile image is displayed                                     |  X  |     |
| Username is displayed                                          |  X  |     |
| If I own the profile, a dropdown with edit option is displayed |  X  |     |
| If user has added a bio it is displayed                        |  X  |     |
| Profile owner posts can be searched                            |  X  |     |
| Profile owners posts are shown in a feed                       |  X  |     |

#### Edit Profile

| Works                                           | YES | NO  |
| ----------------------------------------------- | :-: | --- |
| Page loads                                      |  X  |     |
| Username is prefilled                           |  X  |     |
| Old profile image is displayed                  |  X  |     |
| Cancel button takes me back to my profile       |  X  |     |
| Username can not be empty                       |  X  |     |
| Image upload shows new image in preview         |  X  |     |
| When I press save my new information is saved   |  X  |     |
| When I press save I am taken back to my profile |  X  |     |

#### Register

| Works                                                     | YES | NO  |
| --------------------------------------------------------- | :-: | --- |
| Page loads                                                |  X  |     |
| The link to the sign in page takes me to the sign in page |  X  |     |
| The form will not allow any blank fields                  |  X  |     |
| The passwords must match                                  |  X  |     |
| On successful sign up I am taken to the sign in page      |  X  |     |

### User Stories Testing

Here I have viewed the user stories in my GitHub project, and carefully gone through my acceptance criteria for each user story.

If the criteria is met, it is marked in these tables below.

Finally the issue for each user story in my project has been closed if the acceptance criteria was met.

#### Navigation

- As a Site User I can access a navbar from every page so that I can navigate the site easily.

| Acceptance criteria met           | YES | NO  |
| --------------------------------- | :-: | --- |
| Nav bar is present on all pages   |  X  |     |
| Navbar can be used for navigation |  X  |     |

#### Authentication

- As a Site User I can register an account so that I can access more features.

| Acceptance criteria met                       | YES | NO  |
| --------------------------------------------- | :-: | --- |
| I can access the page to register an account. |  X  |     |
| There is a form that I can use to sign up.    |  X  |     |
| The form creates an account when submitted.   |  X  |     |

- As a Site User I can sign in so that I get access to additional features.

| Acceptance criteria met            | YES | NO  |
| ---------------------------------- | :-: | --- |
| Sign in page is accessible         |  X  |     |
| Sign in page has a form to sign in |  X  |     |
| A registered user can sign in      |  X  |     |

- As a Site User I can see my logged in status so that I can log out if I need to.

| Acceptance criteria met                                        | YES | NO  |
| -------------------------------------------------------------- | :-: | --- |
| When I am logged in it is reflected with my name in the navbar |  X  |     |
| I get access to additional links                               |  X  |     |

- As a Site User I can remain logged in for some time, or until I log out so that I have a good experience.

| Acceptance criteria met                             | YES | NO  |
| --------------------------------------------------- | :-: | --- |
| After signing in, I stay signed in until I sign out |  X  |     |

#### Posts

- As a Site User I can add posts so that I can share my content.

| Acceptance criteria met                       | YES | NO  |
| --------------------------------------------- | :-: | --- |
| I can access Add Post when logged in          |  X  |     |
| Add Post has a form to create a post          |  X  |     |
| When the form is submitted my post is created |  X  |     |

- As a Site User I can view a single post so that I can interact with it.

| Acceptance criteria met                       | YES | NO  |
| --------------------------------------------- | :-: | --- |
| When visiting the URL of a post I can view it |  X  |     |

- As a Site User I can like a post so that I can show appreciation.

| Acceptance criteria met                                          | YES | NO  |
| ---------------------------------------------------------------- | :-: | --- |
| When viewing a post I can like it                                |  X  |     |
| If I change my mind and click it again the post will be un-liked |  X  |     |

- As a Site User I can download a post image so that I can keep it for later.

| Acceptance criteria met                                      | YES | NO  |
| ------------------------------------------------------------ | :-: | --- |
| When viewing a post there is a download button               |  X  |     |
| The button takes me to a page where I can download the image |  X  |     |
| Download count is incremented                                |  X  |     |

- As a Site User I can view a feed of posts so that I can get the latest content.

| Acceptance criteria met                         | YES | NO  |
| ----------------------------------------------- | :-: | --- |
| When on the homepage a feed of posts are loaded |  X  |     |

- As a Site User I can view posts I have liked so that I can find my way back to them easily.

| Acceptance criteria met                              | YES | NO  |
| ---------------------------------------------------- | :-: | --- |
| On the liked posts page I can see posts I have liked |  X  |     |

- As a Site User I can delete my post so that I can remove it if I want to.

| Acceptance criteria met                                   | YES | NO  |
| --------------------------------------------------------- | :-: | --- |
| A signed in user can delete their own posts               |  X  |     |
| There should be a confirmation before the post is deleted |  X  |     |

- As a Site User I can edit my post so that I can change it if I want to.

| Acceptance criteria met                                                              | YES | NO  |
| ------------------------------------------------------------------------------------ | :-: | --- |
| When viewing a post as the owner, I can choose to edit the post                      |  X  |     |
| When clicking edit post, I get taken to a form that is pre-filled with the post data |  X  |     |
| When submitting the updated data, my post is updated                                 |  X  |     |

#### Search

- As a Site User I can search for posts so that I can find content I'm looking for.

| Acceptance criteria met                                                   | YES | NO  |
| ------------------------------------------------------------------------- | :-: | --- |
| A search bar exists                                                       |  X  |     |
| Typing in the search bar will return results based on User, tags or title |  X  |     |

#### Infinite Scroll

- As a Site User I can scroll infinitely so that I never have to click next page to see more posts.

| Acceptance criteria met                                           | YES | NO  |
| ----------------------------------------------------------------- | :-: | --- |
| When I reach the bottom of the page more posts load automatically |  X  |     |

#### Comments

- As a Site User I can add comments to a post so that I can engage with the community.

| Acceptance criteria met                     | YES | NO  |
| ------------------------------------------- | :-: | --- |
| A signed in user can add comments to a post |  X  |     |
| A signed out user can not add comments      |  X  |     |

- As a Site User I can view comments so that I can read what other users think of the post.

| Acceptance criteria met                                   | YES | NO  |
| --------------------------------------------------------- | :-: | --- |
| When a user is viewing a post, they can also see comments |  X  |     |

- As a Site User I can delete my comments so that I can remove them if I want to.

| Acceptance criteria met                                            | YES | NO  |
| ------------------------------------------------------------------ | :-: | --- |
| When a user views their comment, they have the option to delete it |  X  |     |
| Deleting a comment decrements the comments count by 1              |  X  |     |
| Deleting a comment removes the comment                             |  X  |     |

- As a Site User I can edit my comments so that I can change them if I want to.

| Acceptance criteria met                                                             | YES | NO  |
| ----------------------------------------------------------------------------------- | :-: | --- |
| A user can choose to edit their comments                                            |  X  |     |
| When they choose to do so, they are presented with their comment content pre-filled |  X  |     |
| When submitted, the comment is updated                                              |  X  |     |

- As a Site User I can like comments so that I can show people I liked what they said.

| Acceptance criteria met                       | YES | NO  |
| --------------------------------------------- | :-: | --- |
| A signed in user can like a comment           |  X  |     |
| A signed out user cannot like a comment       |  X  |     |
| When a user creates a like, likes count go up |  X  |     |

- As a Site User I can unlike a comment so that I can change my mind.

| Acceptance criteria met                                            | YES | NO  |
| ------------------------------------------------------------------ | :-: | --- |
| When a user has liked a comment, they can click it again to unlike |  X  |     |

#### Albums

- As a Site User I can create albums so that I can get organized.

| Acceptance criteria met                                               | YES | NO  |
| --------------------------------------------------------------------- | :-: | --- |
| User can fill out a form to create albums                             |  X  |     |
| The creation form should be on the same page as the albums are listed |  X  |     |

- As a Site User I can view my albums so that I can interact with them

| Acceptance criteria met                                 | YES | NO  |
| ------------------------------------------------------- | :-: | --- |
| When navigating to Albums the user can see their albums |  X  |     |

- As a Site User I can delete my albums so that I can remove them if I want to.

| Acceptance criteria met                           | YES | NO  |
| ------------------------------------------------- | :-: | --- |
| A user is able to delete albums they have created |  X  |     |

- As a Site User I can edit my albums so that I can change their names if I want to.

| Acceptance criteria met                          | YES | NO  |
| ------------------------------------------------ | :-: | --- |
| Users are able to edit the title of their albums |  X  |     |

- As a Site User I can add posts to albums so that I can sort content as I want to.

| Acceptance criteria met                                              | YES | NO  |
| -------------------------------------------------------------------- | :-: | --- |
| When a user is viewing a post, they can choose to add it to an album |  X  |     |
| The user must first have created the album                           |  X  |     |

- As a Site User I can view posts I have added to my albums so that I can find the posts I want.

| Acceptance criteria met                                                              | YES | NO  |
| ------------------------------------------------------------------------------------ | :-: | --- |
| If a user has albums with posts added, they can click their albums to view the posts |  X  |     |

#### Profiles

- As a Site User I can visit other users profiles so that I can learn more about them.

| Acceptance criteria met                                                                                             | YES | NO  |
| ------------------------------------------------------------------------------------------------------------------- | :-: | --- |
| When visiting a users profile their profile image is visible                                                        |  X  |     |
| When visiting a users profile there is a field where I can read about the profile owner if they have added anything |  X  |     |
| Their username is displayed                                                                                         |  X  |     |

- As a Site User I can edit my profile so that I can change what users see about me.

| Acceptance criteria met                                                | YES | NO  |
| ---------------------------------------------------------------------- | :-: | --- |
| Owner of the profile has a dropdown menu where they can choose to edit |  X  |     |
| When clicked, they get a form where information can be edited          |  X  |     |
| When form is submitted, their profile is updated                       |  X  |     |


## Bugs

### Bug

![Bug]()


## Bug Fixes

### Bug Fix

![Bug]()


## Credits

### Projects

This project draws inspiration from the [Moments](https://github.com/Code-Institute-Solutions/moments/tree/304244f540308ff4dd3c961352f55a633a4b3bed) project. Consequently, any identical or similar code can be attributed to this influence.

While the two projects differ in design and functionality, they share certain features.

Here are two examples of similar code:

- `fetchMoreData`: A helper function for the react-infinite-scroll-component. 

  I required the same functionality, and this implementation fulfilled my needs. 

  You can find it in `src/utils/utils.js`.

- `CurrentUserContext`: This component contains nearly identical code to that in the Moments project. 

  The ability to easily access and set user data was crucial, and this implementation met my requirements.

These examples are representative of several instances of similar code existing between the two projects. 

The similarities stem from functional requirements and the original code effectively addressing those requirements in specific instances.

### Websites

This [Stack Overflow]() page provided valuable insights that helped me implement searchParams successfully.

I used [favicon.io](https://favicon.io/) to create my favicon.

[Am I responsive](https://ui.dev/amiresponsive) was utilized for generating the images of my website, which are placed at the top of this README.

### People
