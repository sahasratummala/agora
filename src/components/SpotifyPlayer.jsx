export default function SpotifyPlayer() {
  return (
    <div className="spotify-embed-wrap">
      <p className="spotify-label">🎵 the playlist</p>
      <iframe
        style={{ borderRadius: '12px', display: 'block' }}
        src="https://open.spotify.com/embed/playlist/6DDL2W6d7kxy9fASvwq6bi?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify playlist"
      />
    </div>
  );
}
