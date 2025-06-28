const topics = {
    definition: `
      <h2>Definition and Examples of Real Sequences</h2>
      <p>A <strong>sequence</strong> is an ordered list of numbers written in a definite order. It is a function whose domain is the set of natural numbers and range is a subset of real numbers.</p>
      <p><strong>Example:</strong> The sequence defined by \( a_n = \\frac{1}{n} \) is:</p>
      <ul><li>1, 0.5, 0.333, 0.25, 0.2, ...</li></ul>
      <p>Each term of the sequence is denoted by \( a_n \), where 'n' is the position of the term in the sequence.</p>
    `,
    bounded: `
      <h2>Bounded and Unbounded Sequences</h2>
      <p>A sequence is <strong>bounded</strong> if there exists a real number M such that all terms of the sequence lie between -M and M.</p>
      <p><strong>Bounded Above:</strong> \( a_n \leq M \) for all n</p>
      <p><strong>Bounded Below:</strong> \( a_n \geq m \) for all n</p>
      <p><strong>Example:</strong> \( a_n = \\frac{1}{n} \) is bounded since all terms lie between 0 and 1.</p>
    `,
    monotonic: `
      <h2>Monotonic Sequences</h2>
      <p>A sequence is said to be <strong>monotonic</strong> if it is either increasing or decreasing.</p>
      <ul>
        <li><strong>Monotonic Increasing:</strong> \( a_n \leq a_{n+1} \)</li>
        <li><strong>Monotonic Decreasing:</strong> \( a_n \geq a_{n+1} \)</li>
      </ul>
      <p><strong>Example:</strong> \( a_n = n \) is monotonic increasing. \( a_n = \\frac{1}{n} \) is monotonic decreasing.</p>
    `,
    convergence: `
      <h2>Convergence of Sequences</h2>
      <p>A sequence \( a_n \) <strong>converges</strong> to a limit L if for every \( \epsilon > 0 \), there exists an N such that for all \( n > N \), \( |a_n - L| < \epsilon \).</p>
      <p><strong>Example:</strong> \( a_n = \\frac{1}{n} \) converges to 0 as \( n \to \infty \).</p>
    `,
    limit: `
      <h2>Limit Theorems</h2>
      <ul>
        <li>If \( \\lim a_n = A \) and \( \\lim b_n = B \), then:
          <ul>
            <li>\( \\lim (a_n + b_n) = A + B \)</li>
            <li>\( \\lim (a_n - b_n) = A - B \)</li>
            <li>\( \\lim (a_n \\cdot b_n) = A \\cdot B \)</li>
            <li>If \( B \\neq 0 \), \( \\lim (\\frac{a_n}{b_n}) = \\frac{A}{B} \)</li>
          </ul>
        </li>
      </ul>
    `,
    subsequence: `
      <h2>Subsequences</h2>
      <p>A subsequence is a sequence derived by deleting some or no elements without changing the order of the remaining elements.</p>
      <p><strong>Example:</strong> From \( 1, 2, 3, 4, 5 \), one subsequence could be \( 2, 4 \).</p>
    `,
    cauchy: `
      <h2>Cauchy Sequences</h2>
      <p>A sequence is called a <strong>Cauchy sequence</strong> if for every \( \epsilon > 0 \), there exists an N such that for all \( m, n > N \), \( |a_n - a_m| < \epsilon \).</p>
      <p>In the set of real numbers, every Cauchy sequence is convergent.</p>
    `,
    infinite: `
      <h2>Infinite and Divergent Sequences</h2>
      <p>If a sequence grows without bounds, it is said to diverge to infinity.</p>
      <p><strong>Example:</strong> \( a_n = n^2 \to \infty \) as \( n \to \infty \)</p>
      <p>A sequence can also oscillate and not converge, e.g. \( (-1)^n \).</p>
    `,
    operations: `
      <h2>Operations on Sequences</h2>
      <ul>
        <li><strong>Sum:</strong> \( a_n + b_n \)</li>
        <li><strong>Product:</strong> \( a_n \\cdot b_n \)</li>
        <li><strong>Scalar Multiplication:</strong> \( c \\cdot a_n \)</li>
      </ul>
      <p>If two sequences converge, then the resulting sequence after these operations also converges.</p>
    `,
    special: `
      <h2>Special Sequences</h2>
      <ul>
        <li><strong>Geometric Sequence:</strong> \( a_n = ar^n \)</li>
        <li><strong>Harmonic Sequence:</strong> \( a_n = \\frac{1}{n} \)</li>
        <li><strong>Fibonacci Sequence:</strong> \( a_1 = 1, a_2 = 1, a_n = a_{n-1} + a_{n-2} \)</li>
      </ul>
    `
  };
  
  function loadContent(topic) {
    document.getElementById("contentArea").innerHTML = topics[topic];
  }
  