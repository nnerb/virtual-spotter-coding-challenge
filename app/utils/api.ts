export const handleDelete = async (studioId: string) => {
  console.log(`Delete studio with ID: ${studioId}`);

  try {
    const res = await fetch(`/api/studios/${studioId}`, { method: 'DELETE' });
    if (res.ok) {
      console.log("Successfully deleted");
    } else {
      console.error("Failed to delete studio");
    }
  } catch (err) {
    console.log("Error deleting studio:", err);
  }
};