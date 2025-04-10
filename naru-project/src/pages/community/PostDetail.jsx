import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>게시물 상세보기</h2>
      <p>게시물 ID: {id}</p>
    </div>
  );
}