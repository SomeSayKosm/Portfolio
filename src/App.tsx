import { useState } from 'react'
import clsx from 'clsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import NavBar from './NavBar'
import PostCard from './PostCard';

library.add(fas, far, fab)

const PostCardData = {
  title: "Test Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non facilisis justo, a malesuada erat. Quisque efficitur velit id lectus convallis cursus vitae nec orci. Pellentesque a eros eget quam condimentum rutrum. In volutpat leo tortor, in hendrerit diam ultrices aliquam. Donec ultricies elit ipsum, posuere vehicula neque tristique id. Nunc pharetra nec nibh volutpat imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
  date: "June 12, 2024",
}


function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  const colorSettings = darkModeEnabled ? 
    {
      content:"bg-sky-950",
      trim:"bg-slate-950",
    } : 
    {
      content:"bg-amber-50",
      trim:"bg-indigo-950",
    }

  return (
    <>
      <div className={clsx(
        "flex flex-col w-screen items-center justify-start",
        colorSettings.trim
      )}>
        <div className={clsx(
          "max-w-6xl w-full min-h-[2000px]",
          colorSettings.content
        )}>
          <div className="h-64 text-center">Banner Placeholder</div>
          <NavBar 
            darkModeEnabled={darkModeEnabled}
            setDarkModeEnabled={setDarkModeEnabled}
            />
          <PostCard 
            darkModeEnabled={darkModeEnabled}
            data={PostCardData}
            />
        </div>
      </div>
    </>
  )
}

export default App
