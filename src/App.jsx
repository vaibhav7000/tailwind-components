import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OurStory from './Pages/OurStory'
import Heroes from './Pages/Heroes'
import Gallery from './Pages/Gallery'
import GridGallery from './Pages/GridGallery'

function App() {
  const images = ["https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80", "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80", "https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80", "https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80", "https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80", "https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"]


  return (
    // <OurStory/>
    // <Heroes/>
    // <Gallery/>
    <GridGallery/>
  )

  return (
    <div className='h-screen w-screen'>
      {/* <div className="columns-4 ">
        {images.map((image) => <img className='' src={image} />)}
      </div>

      <div className='columns-3xs'>
          {images.map(image => <img className='w-[256px]' src={image} />)}
      </div> */}

      {/* <div className='pt-30'></div> */}

      <div className='flex flex-col w-screen flex-wrap h-1/2'>
        <div className='bg-red-400 basis-3/4 shrink-0'>01</div>
        <div className='bg-yellow-400 basis-10'>01</div>
        <div className='bg-green-400 basis-50'>01</div>
        <div className='bg-blue-400'>01</div>
        <div className='bg-indigo-400'>01</div>
        <div className='bg-pink-400'>01</div>
        <div className='bg-orange-400 basis-3xs shrink-0'>01</div>
        <div className='bg-orange-400 basis-3xs shrink-0'>01</div>
        <div className='bg-orange-400 basis-3xs shrink-0'>01</div>
      </div>
    </div>
  )
}

export default App

// by default the flex-items take space along the main axis according to the content, along cross-axis it always the 100% space (streatch)

// basis -> utility for controlling the intial size of flex-items along the main-axis (if flex-row => controls width, if flex-col => controls height of the element), basis-number (number * spacing(4)), basis-fraction

// giving height and width in percentage is always with respect to parent if the parent does not have defined width and height (grows according to the content ) than calculating the child's height and width does not make any difference because the parent does not have defined width and height

// wrapping of elements will always along the main axis (By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.). because flex layout is one-directional

// flex -> short hand notation for flex items to grow, shrink (flex-value, flex-fraction, flex-intial, flex-auto, flex-none) , flex-none means the element does not grow and shrink

// order -> is used to break the flow of the flex and grid items (lesser the order, it will appear first)

// justify-content, align-items -> cross the alignment of elements across main axis and cross-axis
// align-content -> is used when there are more than 1 flex row / col and is used to align the total rows and cols along the cros-axis as a whole row / col


// grid 