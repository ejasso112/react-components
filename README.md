# React Components Created
 A repository to Create and test Modular Components that I can use for all of my projects.

## Nav Component
### Required Dependencies
 * React Router Dom  
 * Node SASS

### Install
 ```
 npm install react-router-dom  
 npm install node-sass
 ```  

### \<Nav>
Low-level interface for all nav components.
#### &emsp;className: string
 The class name to give the element.

### \<NavGroup>
 A group of modules that you want to clump together.
 #### &emsp;className: string
 The class name to give the element.

### \<NavLogo>
 Only supports text as logo.
 #### &emsp;className: string
 The class name to give the element.
 #### &emsp;to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### &emsp;to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavLink>
 Text name of the links.
 #### &emsp;className: string
 The class name to give the element.
 #### &emsp;to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### &emsp;to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavButton>
 Use text to disply text.
 #### &emsp;className: string
 The class name to give the element.
 #### &emsp;type: string
 Optional. Supported types are `search`, `advSearch`, and `profile`. Use to display a preset svg for the button.
 #### &emsp;to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### &emsp;to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavSearchField>
 #### &emsp;className: string
 The class name to give the element.

#### Example
```
<Nav className='homeNav'>
  <NavGroup className='navbar'>
    <NavLogo className='logo' to='/'>AT</NavLogo>
    <NavLink className='link' to='/anime'>Anime</NavLink> 
    <NavLink className='link' to='/manga'>Manga</NavLink>
  </NavGroup>
  <NavGroup className='search'>
    <NavSearchField className='searchfield' />
    <NavButton className='submit' type='search' to='/search' />
    <NavButton className='advSearch' type='advSearch' />
  </NavGroup>
  <NavGroup className='account'>
    <NavButton className='login' to='/login'>Log In</NavButton>
    <NavButton className='signup' to='/signup'>Sign Up</NavButton>
    <NavButton className='profile' type="profile" to='/profile' />
  </NavGroup>
</Nav>
```

## Contributions
[Eduardo Jasso (ejasso112)](https://gist.github.com/PurpleBooth/b24679402957c63ec426)

## Versioning
* **Nav 0.0.1 - Basic Functioning Nav**
  * Made the Nav Component.
  * Created the modules `NavGroup`, `NavLink`, `NavButton`, `NavSearchField`.
