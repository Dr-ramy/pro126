// app/content/page.tsx
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import VideoGallery from "@/components/content/maintenance/MainVideo";
import Header from "@/components/layoutcomp/Header";

export default async function ContentPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const groupid = session.user.groupid;

  return (
    <div className="w-full h-full overflow-hidden">
      {groupid === 10 && (
        <>
          <Header courseTitle="Content" />
          <VideoGallery />
        </>
      )}      
      {groupid === 1 && (
        <>
          <Header courseTitle="Content" />
          <VideoGallery />
        </>
      )}
      {groupid === 2 && <VideoGallery />}
      {groupid !== 1 && groupid !== 2 && (
        <p className="text-red-500 p-4">أنت غير مصرح لك بمشاهدة هذا المحتوى.</p>
      )}
    </div>
  );
}
