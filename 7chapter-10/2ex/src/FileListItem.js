import React from 'react';
import PropTypes from 'prop-types';

const FileListItem = ({ file }) => {
  return (
    <tr className="file-list-item" key={file.id}>
      <td className="file-icon">
        <FileIcon file={file} />
      </td>
      <td className="file-name">
        <FileName file={file} />
      </td>
      <td className="commit-message">
        <CommitMessage commit={file.latestCommit} />
      </td>
      <td className="age">
        <Time time={file.updated_at} />
      </td>
    </tr>
  );
}
FilesListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;