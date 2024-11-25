// src/services/profileService.js
import api from './api';

export const profileService = {
  getProfile: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  updateProfile: async (userId, profileData) => {
    try {
      const response = await api.put(`/users/${userId}`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },
  updateProfile: async (profileData) => {
    try {
      const response = await api.post(`/users`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error adding profile:', error);
      throw error;
    }
  },

  uploadProfileImage: async (userId, imageFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await api.post(`/users/${userId}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading profile image:', error);
      throw error;
    }
  },
};

export default profileService;