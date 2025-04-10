export default function WritePost() {
    return (
      <div>
        <h2>글쓰기</h2>
        <form>
          <input type="text" placeholder="제목" />
          <br />
          <textarea placeholder="내용" />
          <br />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }