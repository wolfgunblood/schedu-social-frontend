import React from 'react'
import ConnectedAccounts from '../_components/connected-accounts'

const Accounts = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
            <ConnectedAccounts />
        </main>
    )
}

export default Accounts