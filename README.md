# MeFIT client

**Domain link:** https://me-fit-frontend-tawny.vercel.app/profile

## Introduction

Welcome to the Frontend Component of the Collaborative Case Project!

As we embark on this journey, we're entering the realm of real-world work environments, where collaboration is key. This four-week immersive experience was an essential part of our final course, where we joined an assigned team of fellow full-stack development candidates to mirror the dynamics of professional project teams.

Our primary focus during this endeavor was the successful execution of a client's project. This period challenged our teamwork, problem-solving, and integration of frontend development skills.

It's important to note that our team's composition was different, with some groups including UX/UI design candidates, backend candidates, while some others consist exclusively of full-stack developers. However, the core essence of collaborative innovation remained constant. Every team member played a crucial role in bringing the project to life.

In this journey, be prepared to leverage the power of teamwork and technical prowess.

<br>
<br>
<div align="center">
  <center><img src="assets/gym_models.png" alt="MeFIT" width="600"/></center>
</div>
<br>
<br>

## Learning Outcomes

### For Full-Stack Development Candidates:

**_Project Insight:_** Demonstrate insight into industry-relevant project planning, prototyping, and deployment standards.

_**Problem-Solving:**_ Apply development knowledge to address problems and issues within an industry-relevant project brief.

_**Research Skills:**_ Find information and materials that are pertinent to the project's requirements.

_**Scope Understanding:**_ Study a project brief's scope, identify measures to optimize results, and meet deadlines effectively.

_**Group Collaboration:**_ Plan and execute a development brief, catering to the needs of selected audiences, as part of a collaborative group.

_**Teamwork:**_ Build strong relationships with peers and collaborate on solving development brief challenges.

### For UX/UI Candidates:

_**UX Design Standards:**_ Demonstrate insight into industry-relevant UX design standards, encompassing project preparation, presentation, and delivery. Application of Knowledge: Apply user experience and user interface knowledge to address issues within an industry-relevant project brief.

_**Effective Research:**_ Efficiently locate relevant information and materials needed for the project.

_**Scope Analysis:**_ Analyze a project brief's scope, identifying potential user experience and delivery issues, and implement measures for optimization and timely completion.

_**Group-Based UX Design:**_ Plan and execute UX design solutions based on the needs of selected audiences within collaborative group projects. Interdisciplinary Collaboration: Build relationships with peers across different disciplines, project stakeholders, participants, and fellow UX/interaction designers.

_**Work Methods and Products:**_ Develop work methods and products relevant to the UX Design process.
These learning outcomes reflect the key skills and competencies that full-stack development and UX/UI candidates will gain through the successful completion of the project.

## Project Overview

Welcome to MeFIT, your fitness companion for achieving and maintaining your workout goals. MeFIT is a collaborative full-stack development project designed to empower individuals on their fitness journeys.

**Key Features:**

- _**Personalized Workout Regimens:**_ Tailor your exercise preferences and goals. MeFIT's intelligent algorithm generates a custom workout plan just for you.

- _**Goal Tracking:**_ Set weekly workout goals, and track your progress in real-time with visual feedback to stay motivated.

- _**Comprehensive Exercise Library:**_ Access a variety of exercises with descriptions, images, and videos to ensure correct and efficient execution.

- _**Community Support:**_ Join a supportive fitness community to stay motivated, receive encouragement, and explore new exercises.

- _**User-Centric Design:**_ MeFIT offers an intuitive and seamless user experience across devices, making fitness accessible wherever you are.

No more struggling with inconsistent routines, boredom, or lack of motivation. MeFIT is your solution to staying accountable, motivated, and injury-free on your fitness journey.

Join us today and experience the power of MeFIT as your trusted companion to a fitter, healthier you.

## Project Structure

_Project tree will be printed here_

<br>

## Features

- **Responsive Design:** Ensures a seamless experience on various devices.
- **User Authentication:** Secure login and registration.
- **Role-Based Navigation:** Personalized navigation for different user roles.
- **Dashboard:** Track and set fitness goals, view progress.
- **Fitness Library:** Explore programs, workouts, and exercises.
- **User Profile:** Access and edit profile information.
- **Contributor Applications:** Apply for contributor roles, admin approval.
- **Admin Role:** Manage users and contributor actions.

<br>

## Views
- **Login:** Users authenticate their sessions and can register if new to the platform.
- **Navbar:** A navigation bar with user-specific options, including links to different components.
- **Dashboard:** Displays progress towards fitness goals, a calendar, and goal-setting options. Provides detailed information on fitness goals, including completed workouts and logging capabilities. For users to apply for contributor roles, with admin approval.
- **Fitness Library:** Allows users to explore and select fitness programs, workouts, and exercises.
- **Profile:** Displays user information, including name, picture, bio, and fitness preferences, with the ability to edit settings.
- **Admin:** A special interface for administrators to manage users and contributor actions.

<br>

<div align="center">
<center><h2 align="center">Views</h2></center>
</div>
<br>
<div align="center">
<center><img src=" " alt="Teaser"/></center>
</div>
<br>

## Requirements

> Check out the detailed [requirements](https://github.com/GustafHasselgren/MeFit-Frontend/milestones) for the entire project
<br>

## Getting started

Before you begin, make sure you have the following tools and software installed:

### Prerequisites

- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
  or [Visual Studio Code (VSCode)](https://code.visualstudio.com/Download) => Open and select the cloned
  directory repo by following (File/Open folder) from the menu above or ctrl + N + O (windows).
  Recommended extensions
  are [Java](https://www.oracle.com/java/technologies/downloads/), [Maven](https://maven.apache.org/)
  or [Gradle](https://gradle.org/releases/), [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Docker](https://www.docker.com/get-started) to replicate the development environment.
- A [GitLab](https://about.gitlab.com/) or [GitHub](https://github.com/login) account to store and collaborate on your
  project code.

This section will guide you through setting up your development environment, installing dependencies, and running
the Film API project locally.

* [Git](https://git-scm.com/) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
    * [Add your Git username and set your email](https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html#add-your-git-username-and-set-your-email)
        * `git config --global user.name "YOUR_USERNAME"` => check `git config --global user.name`
        * `git config --global user.email "email@example.com"` => check `git config --global user.email`
    * > **Windows users**: To use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) (**recommended**)
      shell from your Git installation or the Bash shell from
      the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run all shell
      commands for this project.
* [GitHub](https://www.google.se/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiDlrjRtpyBAxWdVPEDHZ5GDJ8QFnoECBcQAQ&url=https%3A%2F%2Fgithub.com%2Flogin&usg=AOvVaw0YPQjBCLvq4nLugtBaJju7&opi=89978449) => Login to your account with your **gitHub credentials**.
    * [Setup SSH key with GitHub]
        * Create an SSH key pair `ssh-keygen` by following the [instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for all
          OS (skip if you already have one),
        * Add your public SSH key to your GitlHub profile under ./settings/access/SSH-and-GPG-keys by following the [instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account),
        * Make sure the email you use to commit is registered under ./edit profiles/emails in gitlab.
* [GitLab](https://gitlab.com/users/sign_in/) => Login to your account with your **gitlab credentials**.
    * [Setup SSH key with Gitlab]
        * Create an SSH key pair `ssh-keygen` by following the [instructions](https://docs.gitlab.com/ee/ssh/) for all
          OS (skip if you already have one),
        * Add your public SSH key to your Gitlab profile under ./edit profiles/SSH keys,
        * Make sure the email you use to commit is registered under ./edit profiles/emails in gitlab.

### Setting Up the Environment

#### Setting Java Path in Windows

- Go to the Search box and type advanced system settings in it. Now click on the View advanced system settings.
- Select the Advanced tab and then click environment variables.
- In the system, variables click the New button. Now in the edit system variable, type variable name as JAVA_HOME and
  variable path as the path where the JDK folder is saved and click on OK button Usually the path of the JDK file will
  be C:\Program Files\Java\<java-version>
- Now in the system variables go to the path and click the edit button.
- Click the New button.
- Now add the following path: %JAVA_HOME%\bin

1. **Clone the Repository**: Clone this Git repository to your local machine using Git or your preferred
   version control tool as shown above.

```bash
# Clone the repository (SSH) or clone with HTTPS
git clone git@github.com:GustafHasselgren/MeFit-Frontend.git | (SSH)
git clone [https://gitlab.com/ediz_genc/fullstack-js-angular.git](https://github.com/GustafHasselgren/MeFit-Frontend.git) | (HTTPS)
```

2. **Open Project in IntelliJ IDEA**:
    - Launch IntelliJ IDEA.
    - Click on "Open or Import" and select the cloned repository folder.
    - Let IntelliJ build the project and set up the necessary configurations.

```bash
# Change into the directory if you are not there
cd MeFit-Frontend

# Install npm
`npm install` (for local modules) or `npm install -g npm` (for global modules)

# To run the client
Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
```
<br>

```bash
# Code scaffolding if you would like create your own web application
Run `npm install -g @angular/cli` for cli in new directory of your choice.
Run `ng new ng-project_name` to create the new project.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```

### Troubleshooting
If you encounter any issues while setting up your environment or running the application, please refer to the official
documentation of the tools used or consult the project's maintainers for assistance.

<br>
<br>

<br>
<div align="center">
  <center><h2 align="center">Class Diagram</h2></center>
</div>
<br>
<div align="center">
  <center><img src="https://gitlab.com/ediz_genc/fullstack-java-db-spring-web-api/-/raw/main/assets/fullstack-java-db-spring-web-api-class-diagram.jpg?ref_type=heads" alt="Class Diagram"/></center>
</div>
<br>

## About Us

Fueling the project has been by a passionate team of student level fullstack developers — individuals [Ediz Genc](https://github.com/ediz-genc), [Gustaf Hasselgren](https://github.com/GustafHasselgren), [Linus Tareby](https://github.com/linusJtareby) and [Mahir Eziz](https://gitlab.com/Mahir-Eziz) who share a common vision for coding. Their dedication has led to the creation of a database and an interface to store and manipulate fitness-related data that reflects their journey as learners and creators.

## License

**Disclaimer:** This project is an educational exercise and is not intended for commercial use. It is developed under
the guidance of experts, adhering to copyright and legal guidelines of [MIT](https://choosealicense.com/licenses/mit/).
Rest assured, this project complies with legal standards and embodies ethical coding practices.
