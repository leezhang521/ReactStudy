export default {
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        wordWrap: 'break-word',
        backgroundColor: 'rgb(48, 36, 36)',
        backgroundClip: 'border-box',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '.25rem',
        margin: '10px',
        boxSizing: 'border-box'
    },
    cardImgTop: {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '.25rem .25rem 0 0'
    },
    cardBody: {
        flex: '1 1 auto',
        padding: '1.25rem',
        backgroundColor: '#fff',
        borderRadius: '0 0 .25rem .25rem',
        textAlign: 'left',
        color: '#212529'
    },
    cardTitle: {
        margin: '0 0 .75rem',
        fontSize: '1.25rem',
        
    },
    cardText: {
        margin: '0 0 1rem'
    },
    button: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
        userSelect: 'none',
        backgroundColor: '#007bff',
        border: '1px solid #007bff',
        padding: '.375rem .75rem',
        fontSize: '1rem',
        borderRadius: '.25rem',
        textDecoration: 'none',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
    }
}