'use client'
import _ from 'lodash'

export default function Home() {
  return (
    <main className='relative h-screen'>
      <h1>Hello World</h1>
      <button onClick={async () => {
        // here we lazyload our lodash on demand(click of this button)
        const _ = (await import('lodash')).default
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'},
        ];

       const sorted = _.orderBy(users,['name']);
       console.log(sorted);
      }}>Show</button>
    </main>
  )
}
