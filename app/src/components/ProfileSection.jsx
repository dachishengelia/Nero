import PropTypes from 'prop-types'

function ProfileSection({ currentFont }) {
  return (
    <div className="profile-section">
      <div className="profile-image-container">
        <img
          src="/4437584f-d40e-41f6-8ee7-a4d2aaffc09e.jpg"
          alt="Nero"
          className="profile-image"
        />
      </div>
      <h1 style={{ fontFamily: currentFont }}>Nero!</h1>
    </div>
  )
}

ProfileSection.propTypes = {
  currentFont: PropTypes.string.isRequired
}

export default ProfileSection
