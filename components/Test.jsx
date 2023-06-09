'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Button from './util/Button';
import { addBookmark } from '@/services/userServices';
import { newBookmark } from '@/services/urls';

const Test = () => {
    const [image, setImage] = useState(null);
    console.log(image)

    const onFileChange = e => {
        console.log('e:',e.target.files)
        setImage(e.target.files)
    }

    const onsubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization':'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEyNjMzLCJqdGkiOiI1YzU4ODQ2ZjU0NjU0OWViYTVhNTJiZWQ4YWVmOTZiYyIsInVzZXJfaWQiOjF9.BnJouOMEVZ3RxXLCOgVk0OjwTa3Zil5k-6d7uOX7hkI'
            }
        };


        const body = {image:image};
        console.log('body',body)

        const res =  axios.post('http://127.0.0.1:8000/myads/1/images/', body, config)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(null)
        })
 
    };

    return (
        <div className='container mt-5'>
            <h1 className='display-4 mt-5 mb-5'>Image Upload Tutorial</h1>
            <div className='row'>
                <div className='col-5'>
                    <form onSubmit={onsubmit}>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='image'>
                                Image Upload
                            </label>
                            <input
                                className='form-control'
                                type='file'
                                name='image'
                                onChange={onFileChange}
                                required
                                multiple
                            />
                        </div>
                       
                        <button className='btn btn-success mt-3' type='submit'>
                            Upload Image
                        </button>

                    </form>
                    {/* <Button onClick={OnAddBookmark} small label="add bookmark"/> */}
                </div>
                <div className='offset-1 col-6'>
                    <h3 className='mb-5'>My Uploaded Images:</h3>
                    {/* <div>
                        {
                            images !== null && images !== undefined && images.length > 0 && images.map(image => (
                                <div className='mb-5' key={image.id}>
                                    <Image
                                        width={200}
                                        height={150}
                                        src={`http://localhost:8000${image.image}`}
                                        alt={image.alt}
                                    />
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Test;