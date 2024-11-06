export const uploadImage = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'facebook')
  
    const uploadResponse = await fetch('https://api.cloudinary.com/v1_1/dx1jngfdn/image/upload', {
      method: 'POST',
      body: formData
    })
    if (!uploadResponse.ok) {
      throw new Error('Image upload failed')
    }
  
    const imageData = await uploadResponse.json()
    const imageUrl = imageData.secure_url
  
    return imageUrl
  }
  