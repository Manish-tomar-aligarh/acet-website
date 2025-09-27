export async function uploadToCloudinary(file: File) {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "");
  const res = await fetch(url, { method: "POST", body: fd });
  if (!res.ok) throw new Error("Upload failed");
  const data = await res.json();
  return data.secure_url as string;
}
