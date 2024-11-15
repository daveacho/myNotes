import Header from "../UI-Layouts/header";

export default function AddNote () {
    return <>
              <Header/>
              <form>
                <label>Title</label> 
                <input type="text" placeholder="please enter a title" />
                <label>Content</label>
                <textarea placeholder="Please enter note's content"></textarea>
                <label>Note Category</label>
                <select>
                    <option value={1}>Business</option>
                    <option value={2}>Personal</option>
                    <option value={3}>Important</option>
                </select>
                <button>Add Note</button>
              </form>
            </>
}