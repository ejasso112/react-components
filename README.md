# React Components Created
 A repository to Create and test Modular Components that I can use for all of my projects.

## Navigation Component
### Required Dependencies
 * React Router Dom  
 * Node SASS

### Install
 ```
 npm install react-router-dom  
 npm install node-sass
 ```  

### \<Navigation>
Low-level interface for all nav components.
#### className: string
 The class name to give the element.

### \<NavGroup>
 A group of modules that you want to clump together.
 #### className: string
 The class name to give the element.

### \<NavLogo>
 Allows the use of text, images, and svgs as a logo.
 #### className: string
 The class name to give the element.
 #### contents: object
 An object that can have any of the following properties: (order matters)
 * svg: A component representing the svg.
 * srcImg: A string representing the path of the image.
 * alt: A string representing the alt text of the image.
 * text: A string representing the Logo.
 #### to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavLink>
 Allows the use of text, images, and svgs as a link.
 #### className: string
 The class name to give the element.
 #### contents: object
 An object that can have any of the following properties: (order matters)
 * svg: A component representing the svg.
 * srcImg: A string representing the path of the image.
 * alt: A string representing the alt text of the image.
 * text: A string representing the Logo.
 #### to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavLinkButton>
 Allows the use of text, images, and svgs as a button link.
 #### className: string
 The class name to give the element.
 #### contents: object
 An object that can have any of the following properties: (order matters)
 * svg: A component representing the svg.
 * srcImg: A string representing the path of the image.
 * alt: A string representing the alt text of the image.
 * text: A string representing the Logo.
 #### type: string
 Supported types are `search`. Use to redirect based on `NavSearchField` value.
 #### to: string
 A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
 #### to: object
 An object that can have any of the following properties:
 * pathname: A string representing the path to link to.
 * search: A string representation of query parameters.
 * hash: A hash to put in the URL, e.g. #a-hash.
 * state: State to persist to the location.

### \<NavButton>
 Allows the use of text, images, and svgs as a button.
 #### className: string
 The class name to give the element.
 #### contents: object
 An object that can have any of the following properties: (order matters)
 * svg: A component representing the svg.
 * srcImg: A string representing the path of the image.
 * alt: A string representing the alt text of the image.
 * text: A string representing the Logo.

### \<NavSearchField>
 #### className: string
 The class name to give the element.

#### Example
```
<Navigation className='homeNav'>
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
</Navigation>
```

#### To Dos
 * Update the Readme Navigation Section
 * Add a dropdown filters module
 * Add an input filter module
 * Add a toggleable slidder module.
 * Make the component responsive.

## Contributions
[Eduardo Jasso (ejasso112)](https://gist.github.com/PurpleBooth/b24679402957c63ec426)

## Versioning
* **Navigation 0.0.1 - Basic Functioning Nav**
  * Made the Navigation Component.
  * Created the modules `NavGroup`, `NavLink`, `NavButton`, `NavSearchField`.
  * Can only redirect to different page using `to` parameter.
  * `type` parameter sets a default svg icon to a button. Supports `search`, `advSearch`, and `profile`.
* **Navigation 0.0.2 - NavButton 'type:search' and NavSearchField Functionality**
  * `NavSearchField` stores value in state onChange.
  * `type: search` `NavButton` now passes `NavSearchField` value onClick (Redirect) through the pathname.
* **Navigation 0.0.3 - NavLogo and NavLinks Functionality Update**
  * `NavLogo` uses new property `contents: object` with four properties `text: string`, `srcImg: string`, `alt: string` and `svg: component` to display different types of logos. Supports multiple at a time.
  * Like `NavLogo`, `NavLink` also uses the new property `contents: object` with four properties `text: string`, `srcImg: string`, `alt: string`, and `svg: component` to display different types of links. Supports multiple at a time.
  * Added default styling to `Navigation`, `NavGroup`, `NavLogo`, and `NavLink`.
* **Navigation 0.0.4 - NavButton, NavLinkButton and NavSearchField Update**
  * Added a new module `NavLinkButton` which like a `NavLink` it redirects you through the `to:` property.
  * `NavButton` no longer supports the `to:` property.
  * `NavLinkButton` and `NavButton` now support the property `contents: object` with four properties `text: string`, `srcImg: string`, `alt: string`, and `svg: component` to display. Supports multiple at a time.
  * Added default styling to `NavSearchField`, `NavLinkButton`, and `NavButton`.
  * Removed the preset svgs that where in place.
* **Navigation 0.0.5 - State Management Update**
  * Changed from prop drilling to using React Context API.
  * Reorganized all Component modules
* **Navigation 0.1.0 - Overhaul**
  * Folder Hierarchy change.
  * Added `NavText`, `NavImg`, and `NavSvg` modules instead of passing them in as props into `NavLogo`, `NavLink`, `NavLinkButton`, or `NavButton`.
  * `Button` with `type: dropdown` full functionality.
  * `Button` with `type: extension` full functionality.
  * `NavSearchField` functionality on press return key.
  * Added an OnClickOutside event to dropdown menus.
  * Added default styling to all the components.
  * `NavigationContext` no holds the states of every extension and dropdown toggle position by the use of their names.