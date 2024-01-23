import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

export interface PostType {
    id: number; 
    author: Author;
    publishedAt: Date;
    content: Content[]; 
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
       'muito bacana esse poste ai felas'

    ])

    const [newCommentText, setNewCommentText] = useState('')

    

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function handleCreateNewComment (event: FormEvent) {
        event.preventDefault()

        // const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText ]);
        setNewCommentText('');
    }

    function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Tem que ter algo pra comentar né o mula')
    }

    function deleteComment(commentToDelete:string) {
        const commentsWithotDeletedOne =  comments.filter(comment =>{
            return comment !== commentToDelete
        })
          console.log([deleteComment]);

        setComments(commentsWithotDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
       <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                 <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                {publishedDateRelativeToNow}

                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback!</strong>

                <textarea
                name='comment'
                value={newCommentText}
                onChange={handleNewCommentChange}
                placeholder="deixe um comentário"
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type="submit" className={styles.button} disabled={isNewCommentEmpty} >
                        <div className={styles.svgWrapper1}>
                            <div className={styles.svgWrapper}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span>Comentar</span>
                    </button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return ( 
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
       </article>
    )
} 