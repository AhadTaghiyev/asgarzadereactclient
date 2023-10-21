import React, { useState ,useEffect} from 'react'
import './PlayerSide.scss'
import { ReactComponent as FilmIcon } from './../../../../../assets/icons/Film.svg'
import { ReactComponent as Download } from './../../../../../assets/icons/Download.svg'
import { ReactComponent as VectorRight } from './../../../../../assets/icons/VectorRight.svg'
import { ReactComponent as Edit } from './../../../../../assets/icons/Edit.svg'
import { ReactComponent as Trash } from './../../../../../assets/icons/TrashDelete.svg'
import { ReactComponent as Lock } from './../../../../../assets/icons/LockWithBackground.svg'
import { ReactComponent as Resources } from './../../../../../assets/icons/Resources.svg'
import { ReactComponent as DownloadWhite } from './../../../../../assets/icons/DownloadWhite.svg'
import { ReactComponent as CheckboxOn } from './../../../../../assets/icons/Checkbox-on.svg'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import ImageComment1 from './../../../../../assets/images/ImageComment1.png'

const PlayerSide = ({ selectedVideoId, handleSchemeOpen, datas, setDatas,courseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState('');
  const [content,setContent]=useState('');
  const [isLoading,setLoading]=useState(true);
  const handleDownloadClick = () => {
    const fileUrl = ImageComment1;
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = fileUrl;
    anchor.download = 'fileee';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const handleDelete = (item) => {
    setIsModalOpen(true);
    setItemToDelete(item);
  }
  const navigate=useNavigate();
  const handleLeaveNote = () => {
    if (newNote.trim() !== '') {
      const newNoteItem = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        note: newNote,
      };
      setDatas([...datas, newNoteItem]);
      setNewNote('');
    }
  };
    const handleEnroll=(courseId)=>{
      navigate(`/courses/${courseId}`)
    }
    useEffect(()=>{
    if(selectedVideoId!=null&&selectedVideoId!==4){
      fetch(`https://localhost:7020/api/v1/CourseContent/GetById/${selectedVideoId}`)
      .then(res=>res.json())
      .then(obj=>{setContent(obj.data)
        setLoading(false)
      })
    }
    if(selectedVideoId===4){
      setLoading(false)
    }
    },[selectedVideoId])
  const handleEditClick = (item) => {
    // Set the currently edited note and its text when the "Edit" icon is clicked
    setEditNoteId(item.id);
    setEditedNoteText(item.note);
  };
  const handleSaveClick = () => {
    if (editNoteId !== null) {
      // Find the edited note by ID and update its text
      const updatedDatas = datas.map((item) =>
        item.id === editNoteId ? { ...item, note: editedNoteText } : item
      );
      setDatas(updatedDatas);

      // Clear the edit state
      setEditNoteId(null);
      setEditedNoteText('');
    }
  };
  const handleConfirmDelete = () => {
    if (itemToDelete) {
      const updatedData = datas.filter((item) => item.id !== itemToDelete.id);
      setDatas(updatedData);
    }
    setIsModalOpen(false);
    setItemToDelete(null);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };
  if(!isLoading){
    return (
      <div className='player-side-content'>
        <div className='player-side'>
          <div className="head">
            <FilmIcon className='icon-film' />
            <h5>{content?.title}</h5>
          </div>
          {selectedVideoId !== 4 && (
 <div className="video-area">
<video 
    key={content?.videoLink} 
    width="100%" 
    height="auto" 
    controls 
    autoPlay 
    // onContextMenu={(e) => e.preventDefault()}
    controlsList="nodownload"
>
    <source src={content?.videoLink} type="video/mp4" />
    Tarayıcınız video tag'ını desteklemiyor.
</video>
</div>

          )}

          {/* {selectedVideoId === 2 && (
          )} */}
          {selectedVideoId === 4 && (
            <div className="video-area-2">
              <div className='info'>
                <Lock />
                <div className='text'>
                  <span>Watching this video is restricted.
                  </span>
                  <p>Enroll in Course to access.</p>
                </div>
                <div onClick={e=>handleEnroll(courseId)}  className='button-info'>
                  <button>Buy now</button>
                  <span>If you're already enrolled, you'll need to login.</span>
                </div>
              </div>
            </div>
          )}
          {/* {selectedVideoId === 5 && (
            <div className="video-area-3">
              <div className='info'>
                <div className='text'>
                  <Resources />
                  <span>There is no preview for this file.
                  </span>
                  <p>Click the button below to download it.</p>
                </div>
                <button>
                  Download
                  <DownloadWhite />
                </button>
              </div>
            </div>
          )} */}
          <div className="buttons">
            <button className='download-button' onClick={handleDownloadClick}>
              Download
              <Download />
            </button>
            {/* <button >
              Complete and Continue
              <VectorRight className='icon-right' />
            </button> */}
          </div>
        </div>
        <div className='notes'>
    {
        content?.courseFileGetDtos?.map((file, index) => (
            <iframe 
                src={file.filePath} 
                width="100%" 
                height="600px" 
                style={{border: 'none'}}
                title={`PDF Document ${index}`}
                key={index}
            ></iframe>
        ))
    }
</div>

        {/* <div className='notes'>
          <div className="written-notes">
            <h5>Your notes</h5>
            <ul className="notes-area">
              {datas?.map((item) => (
                <li key={item.id}>
                  <span className='time'>{item.date}</span>
                  <div className='note'>
                    {editNoteId === item.id ? ( // Check if the note is in edit mode
                      <textarea
                        value={editedNoteText}
                        onChange={(e) => setEditedNoteText(e.target.value)}
                      />
                    ) : (
                      <p>{item.note}</p>
                    )}
                    <div className='right-side'>
                      {editNoteId === item.id ? (
                        <>
                          <CheckboxOn onClick={handleSaveClick} />
                          <Trash className='icon-trash' onClick={() => handleDelete(item)} style={{ visibility: 'hidden' }} />
                        </>
                      ) : (
                        <>
                          <Edit
                            className='icon-edit'
                            onClick={() => handleEditClick(item)}
                          />
                          <Trash className='icon-trash' onClick={() => handleDelete(item)} />
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="new-note">
            <textarea
              placeholder='Leave a note'
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <button onClick={handleLeaveNote}>Leave a note</button>
          </div>
        </div> */}
        <button className='see-parts' onClick={handleSchemeOpen}>See all parts</button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          handleConfirmDelete={handleConfirmDelete}
        />
      </div>
    )
  }
}

export default PlayerSide