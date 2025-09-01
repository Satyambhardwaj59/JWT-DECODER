export default function FooterNote() {
  return (
    <footer className="text-xs mb-8 text-center text-gray-500 leading-relaxed">
      <p>
        This tool decodes tokens <span className="font-semibold">locally in your browser</span>. 
        The optional time check uses a free public API (WorldTimeAPI) to display current UTC 
        and evaluate time-based claims.
      </p>
      <p className="mt-1">
        <span className="font-semibold">Security note:</span> Without the issuer's public keys 
        or HMAC secret, <em>signature verification is not performed</em>.
      </p>
      <hr className="my-4 border-gray-600" />
      <p className="my-2 ">
        &copy; {new Date().getFullYear()} JWT Decoder. All rights reserved.
      </p>
    </footer>
  );
}
