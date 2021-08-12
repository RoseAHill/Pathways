import React, { useState } from "react";
import { Button, Input } from "react-rainbow-components";

//components
import "./EditComment.css";

const EditComment = (props) => {
  const [showEditForm, setShowEditForm] = useState(false); //will trigger if we see the form

  return (
    <div className="edit-comment">
      <Button
        onClick={() => setShowEditForm(!showEditForm)}
        label="Edit Link"
      />

      <form
        onSubmit={props.handleSubmit}
        className={`edit-comment-form ${!showEditForm && " hide-comment-form"}`}
      >
        {/* placeholder text of new link and button to submit */}
        <Input
          autoComplete="off"
          placeholder="New Link"
          name="refLink"
          value={props.newRefLink}
          onChange={(e) => props.setNewRefLink(e.target.value)}
        />
        <Button
          type="submit"
          label="✔️"
        />
      </form>
    </div>
  );
};

export default EditComment;
