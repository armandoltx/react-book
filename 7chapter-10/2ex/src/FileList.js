import React from 'react';
import PropTypes from 'prop-types';

import Time from './time';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import FileListItem from './FileListItem';

const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {files.map(file => (
          <FileListItem key={file.id} file={file} />
        ))}
      </tbody>
    </table>
  );
}

FileList.propTypes = {
  files: PropTypes.array
};

export default FileList;