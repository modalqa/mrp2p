Feature: Modakrakyat P2P Borrower Ajukan Pinjaman
  As borrower I Want To Login To Modalrakyat P2P

  Scenario: Ajukan pinjaman
    Given borrower is at p2p login page
    Then borrower will see p2p login page
    When borrower login as "ACTIVE_BORROWER"
    Then borrower will see borrower dashboard page
    When borrower click button ajukan pinjaman
    Then borrower directed to type loan page
    When borrower click button ajukan sekarang for modal usaha
    Then borrower input information loan
    Then borrower click button ajukan
    Then borrower click button konfirmasi
      And borrower click button kembali ke dashboard