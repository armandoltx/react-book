import React from 'react';
import Proptypes from 'prop-types';

const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = "fa-folder";
  }
  return (
    <i className={`fa ${icon}`}></i>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;