import React from 'react'

function HeadingDescription({title, description}) {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
        <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  )
}

export default HeadingDescription