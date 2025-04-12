"use client";

import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalRequirements from './_components/AdditionalRequirements'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import axios from 'axios';



function CreateNew() {

    const [formData, setFormData] =useState();
    const onHandleInputChange = (value, fieldName) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value
        }))
   
        console.log(formData);
    }

    const generateAIImage = async () => {
        const imageUrl = await saveImageToCloudinary(formData.image);
        const res = await axios.post('/api/redesign-room', formData )
        console.log (res.data);


    }
    const saveImageToCloudinary = async (imageFile) => {
        try {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
            
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    timeout: 30000
                }
            );
    
            // Log the Cloudinary URL
            console.log('Uploaded image URL:', response.data.secure_url);
            
            return response.data.secure_url;
        } catch (error) {
            console.error('Cloudinary upload error:', error.response?.data || error.message);
            throw new Error('Image upload failed');
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-8 ">
                <h2 className="font-bold text-3xl md:text-4xl text-primary mb-2">
                    Use the power of AI for Interior Designing
                </h2>
                <p className='text-gray-500 text-lg'>
                    Transform your room in a moment using these features.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="w-full h-full flex justify-center mt-15">
                    <ImageSelection 
                        selectedImage={(value) => onHandleInputChange(value, 'image')} 
                    />
                </div>
                
                <div className="space-y-6">
                    <RoomType 
                        selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} 
                    />

                    <DesignType 
                        selectedDesignType={(value) => onHandleInputChange(value, "designType")} 
                    />

                        <AdditionalRequirements 
                            additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalRequirements')}
                        />
                    <Button className="w-full" onClick={generateAIImage}>Generate</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateNew