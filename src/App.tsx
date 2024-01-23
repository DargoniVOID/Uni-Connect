import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'; 

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1746565491802386432/qFMr7UNr_400x400.jpg',
      name: 'Vithória Chiaranda',
      role: 'Gerente adimistrativa'
    },
    content: [
      {type: 'paragraph', content: 'Fala fiote' ,},
      {type: 'paragraph', content: 'Eu acabei de subir mais um projeto. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'viv.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-16 10:12:55')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1688298011384840192/5NpJulCi_400x400.jpg',
      name: 'Rafael Dargoni',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala seus lixo' ,},
      {type: 'paragraph', content: 'Olha esse emoji de foquete -> 🚀'},
      {type: 'link', content: 'Rafael.dev/helloworlds' },
    ],
    publishedAt: new Date('2024-01-16 11:45:35')
  },

];

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
      </div>
    </div>
  )
}
