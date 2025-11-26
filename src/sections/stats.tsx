import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI';
import { Compare } from '@/components/ui/compare';
import Heading, { VariantHeading } from '@/components/ui/heading';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedNumber, AnimatedSlideText } from '../components/Animated/animated';
import { Button } from '../components/ui/button';
import { animateHeadingVariants } from '../utils/framervariants';

interface iStat {
    description: string,
    value: number,
    title: string,
    unit?: string
    imgUrl?:string
}

const stats: iStat[] = [
    {
        title: "Years of Service",
        unit: "+",
        description:
            "Years providing professional cleaning services to residential and commercial clients.",
        value: 10,
        imgUrl:"https://img.freepik.com/premium-vector/vector-minimalist-modern-house-icon-simple-silhouette_628924-7986.jpg"
    },
    {
        title: "Client Satisfaction Rate",
        unit: "%",
        description:
            "Percentage of clients who rate our services as excellent in terms of quality and reliability.",
        value: 95
    },
    {
        title: "Properties Cleaned",
        unit: "+",
        description:
            "Total number of properties we’ve professionally cleaned, including homes, offices, and commercial spaces.",
        value: 150
    },
    {
        title: "Waste Removal Capacity",
        unit: "kg",
        description:
            "Total waste removal and disposal capacity per month, helping maintain eco-friendly environments.",
        value: 500
    },
    {
        title: "Team Members",
        unit: "+",
        description:
            "Dedicated and trained cleaning professionals ready to serve your needs.",
        value: 25,
        imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUAAAD////r6+vq6urp6en29vbs7Ozy8vL5+fn8/Pzv7+/g4ODm5uY/Pz/j4+Oqqqq5ubnW1taenp5YWFhsbGzNzc1iYmIjIyMSEhLDw8M5OTl8fHwcHBx0dHRRUVEXFxeOjo6WlpYvLy9GRkaEhIQMlPn+AAAbaElEQVR4nN0daYOrKDKKgKCJR2ISc3Tn+v+/catA8Qgg6ddvd2fqfZiaDgjFUTewohEAjQEkYimLY4JIxAlgaY/FlnIaixBjqcGoqcxVlaTHBGJSIEpMFQloojCKVVTldKiCBVUVoQoqjE+qJLTHYr5yEiP/ucQQQrpOEpJoYhLAOmIAuCnHVDmDRQrTxCCmicHKXPesx6IcME1MYqoMrVDE6LSKwIKaGIZ/1MRYqiBGgJgUgHKEHpPDn4ZfLeXGmPqZ2wpK8zdpKWitrKpQ07LB5AyjPdYVXNEEQFEncsDUMDD8m54UQHKFpfm0nMJiwIjQIwwFhR6kvor6tJ4eggUjPcIAUV9FjbVqpR/h/tuqCjOtMFUQsTg1lemslZVa09SsaS4mu2C0Pi3lhCo4LGRhqtDpdlE7TPdMrX2DEVOFDJtyqKKHzLQy6piMzT4eWvktYqSDmGRGTPrfJ4aEEkMCiYlDiSGGmBh5n5sYYiem5wjCMBFgMd3S5BN+MSrXNYMFo64K6TfAhNl0wwwFWV9lxC6JqdITk3SMM43HVbo9o7B0VmVoxbDmOOlZsx4uMZUzPWvuh0vJI9mvNTIfriU5A43Eg5wZ5nEkZ9S3seBs6h1yBgjwCM1lDYD8WGgmNqE5I0ZV+S0N4B+szlg0ADLWAOJ5uUEDYFYNIO4WMjXYeGasGkDs0wAkLqReA3ibTEq0BiAAqJSSccRSySRDRHAGf6M9Jody0pRTmFBY2mF9QdZ/cMCEwtIe01WGVqjBUlNlhOG3Rx1Lp1V0KyvsH6gEAv4hphrjGoF/+tcBM+U0NhRETE6qpGKEqYKI6YIDlvYF+VDQVoWrgtwUHLChlTfWrNUZXFcDa54pdWPWjMtFr4Ipa54zzUFBxSqdnJlUIaPlYqp0SlPfymhFy2Hpj1nzv14D+D1i5rrZXyCGjIgBHTifacPxoDXnRgW2lBPEKL6D1jyr0mnNktJeaYA/Rn2VobJHayYTrVlTLY2ujK1MNQAGoL8hAcOuANPoMP2rrVzHNBHTpJuCAxY1r/vteTnfbxXDzap7b6ogFo9awZ/TGLBu6ietxKLvmJoUQeMOg3nEKu9Ck1iF5rAKiEUDIEZodruS60UpsvthNcCuyDSByUQD8msAJFRo/pk649cAYEib7WoGh1rtl7/u0DAaQNxrAHZiRjPTawBmZoghJmGk3c9JQXi26We6mW9mkjExxEJMz2IUv9DEGBZD2Xhm9O6JtNug71lHjEzqk40WgHsexRNi9JAJNOPFQIzqeDzMTNx1TGB35pOpCABiHMBdPwwg0rxqFVQxTac/ybuDFIB9JqYfStNkU+J3ymbD0+mXPgG7BoASeVED4E19/Tp+fx8Oh+2rLjfcWFqJzF5uWlarbR6NNYAUPrRbwWcOl+f+VlbagTIYZ/HEOOsdGlbj7GdCk9Ly+hx3cH0tNlFXRcqrjxZga5uR0GxeX8fRb499HUc/FZo/IUbK5nqY9/Cxb3UVxm7H+Y8zuHbExFF2Xs9//N634ucaQIjfbFxObm7W3X0oVBVePhZoWR1rJcQJtbOJw42LAL9ZZzCNNACLz5KmXo9mFJ9dfdzBNow2b+LlHdatAJ4ROdnENhNTj+bQMQtmPJp6qhLSOzSSsfNk7gnBvSili5bV6sVh4G7LtMC2yWCsC/fvTzLhSQO7cPqaf6IBsMTDqTKwBpu3TWCDb1ySPrKRmr/u0JC+4QTVLy2Wdr+GKyyAja/ATvyQGELeltkwm2qZ8W45ssbT/p2CiNkF0bI6NfDBp69EqZcZm4Y0rLKvX2Za3quNFoIJq8bVQUZ52i6ysg4K4BVe2frIujhH34elLjpDGsSwZj0KaVfONzFHLOhZhVO4ZjH3F36lftb8xyEN38J4Yo1bKDHrRvLWW+KUqX79NQ0g9zV+w8Fb0GQGODaS5d++Eoe2J4aEOjSmUYBe0exdTUknbLpy3kUOYj2qQrfM6tLIOPERc25iTYwEuRn1y4z5FM3OpafdlVMnYCrAJheMK4Nbu+eyL0/r90hEVRhjRig5lRfvz1ykMLhyU9d1URQtbGiqfZLG9TfBjAbQO0XiIeTIJM+LK3Kv5+5a6VGQtHY3f5OEtd6FM4E6jYSTmC/cL4JI0rwGlfarkGrHk/yNNSMX8AhNVhVjLfBwrQRYmowXLhNydeOxbD6YGeEmZqd9a3k5XwnnnDP2qQaQVve3MT43OfxMnUtNEeNZOFO4wGS7iNlV6HRK3z0iAK9Kss9CGmlh3cjnDMyVqHJQs5MxqwJUZg1HJMa+KL+Aa0Ovajup+zYhDg3AltQgZPFme2m4timwBofBcpSc515+N4ZTJURm/WVdgjiPEqd98ChV3oXKfpAmD0ICMYNXEEzEWLFmWZ0dtKCoi4hMHKYkWsMfaAAObqJsPMHchgZYQyMvKxIwEprJXGj6dMV1w4l0LDQUcm0oB7jncWpV9PZ0UZM4lTw0CuBxE63QCJQxL61Tt0Op6ZNEIziUUjLblvlGdToq/Cz+BJ0IIsavMAEXgInlVq3lgWs0cNPsK4dq9pWGDMmWhiU1LCkkl4ITWlk5TYN80LnfJlBQJqx0F0jMbbF+y11JDYMPIKbLOxgkmqDWodtRQqln5w6wBcYsbWSfYFRlsSytvmYagM0HwENEeBGldpq/G+CpXv2tg+OdOjwfNci6EGv1u1zWAILG9ZoIbhcRV3Sh+xmIgl0mRW71fDRRKoN8IudFDUCQEGZ0agSjVlF/KFHNXRyQrwZE8922Bh4CBF6QrHqydFhms6QGqTMPqiBHUZFKcVPY9+Gw220vh56TbjOwA/iCTvNoQWTLXsh8Hx77/f5wUDvoGol0E8QQH6UYkhoUAZ09o5MgMN0gjBftNgKN/cP+VRdlnldlWb/2igs+CjQ5/ENyKSJojtY4AF/ne1GUVQWfKOvrF0hMSUNcogDn1NChCZixZsKDWBHoVVGU7+uyyqXOjE1lUpXFF5KpVNXK851HqSPAyWu1KyrYZHoY0XVRFSUjNPN6oAzs+RtrngjNmId5vdZoq+WUS2byAGDK06zYV6nelcS5VE6t3p1SVmWmTachnImRRJo5LaYpMQsaQCgxR6VyCEa0Ta0C2uhwTJnoWYys7cL3XDGdR4v0az+FipVpslTEMdDA2y8lNXwyM0ABleW9RriXjOp47ZDUUFnUyG2Zs1FSg8qD2BTwjXtdNEJZ7bmMmqCp2Zukhnya1mjkTBAxNypYDCZEdRtG/3GuKJV9gFZ7gqrblJ1sGz0Bg8sozeqBV3xv1W5KGbeNwxtclVncLc9ptDmcmEcNe5ZJUs736aMkzCTPdXPf1Htg3IfDdndts5SbtEYVbRf5W3M1x2gz3wT0Y4fdtofOg4lZt2rFtzaW8yy7xBPcDxQYMMgcSqosx5UlZReB13kAIpI32/cbDNDzdzLf4Dwl5j2pQSyy5kepFnxp36SXQn2Gs6pplOwoEEoFiDVZluVCNZe61tJtgx6Lxd0LQtOe1AActkseWYxH1jj03Kl+fd/xO1TuT+un5VOP5/q0TWBrSels6XhuJOMRXZA2zxwNfZPUwJCYaVggXdLNXjTlNLm7VfTv24Zymt7cn/jKU5rS0sOxtpWgXCwYifu3uMa7cebXi54Sw1m116a9Y06YdPMjJTRbr8Lz4gKWzc1X5Hjni0kNkd2ENB1Bxdo3qCtUz9BHV7p+PmPGfe7nvYc7cAuZ+QheVzIgpOFr5oolF/18a8wYyV3rtZQkWlQBj6X0h09XBQ9JarBbXQoOqEulHtd535BwF9tmLI+qxU/sNnHCPDbriRNLWuM8bYFG7nDRLoHfA4IWhwzKOfZvDe3QAAHfCijnHjcwSN9yMd5CGgx2r3M8SkwsDrGcXjRxeJ3RXb7ozELYYs9a1wZuur2fLIU0pEsF/8p4zOyW+wwOksmNdV/sUBcIChVWDl0V4fVBSKOyy6sbmC/SF24eoOFMWtfIGXTrNEjFL3EbW4Xz45UJDzGTZZa4GFZBQQtZ3v4IN0qYdn59H772+x3AVfkJ0Cm+vP0Rtmgw2by0p6LPHkZv2eA3k31ao5GisHMRq67vo3cpwYpKw6LJ24imDczv8wwGfr5BIGXx2n0XlIqw8Vhha5YUiWvDqRH+dNztcVJDMiQ1EJkVb5OzxsTXKMykPaU4vde61WE4qZO76aZsCLE7qd6hYixK5mO31wmHnyU1SLoppjvncMcUaxHWkRVsjbjJYi2lh9OAmAWbBsYJCsy4z4r9MHzPV1nJIbf3k6QGkTe3dbfatteizePPiMGAUNcMul86NwaJA1cqSCSpulUVxeu53ddlU+WyT7tfSmrIh6SGpEu75lnVgl1SVRSYMlPlAonhnRjg6ntgxWSbnsGwTVh0rebaqyBgR0ih8myN50OaIw6WpAYVFzSYSmhQ30E/m6qtBC78QANHNVIfpII21+3qCADCoUh0bgSPFlRVDUXKBauv153ihWcAjQFHERGGMefdfmfNaOVU9fmh4QTQYYczSWFYg0LjRap3Zf6aejS+lMciSngT4OfjwJqtwXPQQ18Vqn/Gs6SPqsyFpiBZ6VrSuxw2Mg1Y8N8FGsaMbyxx3DPKuyQOoQZ3mNtN87hXEtMb3BqAyO5uVrPPgJiAFKxLgZ5AllhdHqtDQYEYxv3W2UoLTdl61uP3q4klsRCjQxr8zXs06UaTQqll8X2jeEpjU7t6W+d46NKZatBDqTQAb5FnkY1P0a3wREKvS1cv/4YoMc2QLa2PfSbgg9KTdb6rUHbTBfU7EzT1nY9AOFyxsY4AIMZ4OKJ6SZjd1Epc+n7B8YPeUjt0+VOHOtvBNpcxZ4s79NrS2JLU4MhUGcFeiYrMX+6cwa70pnIC3AXsB2oNnfUAdjOw1WUWjvkNbxpAQDryRZtE3uXxbNF4TxZ2N4abJMs9Xd1naFk5vSIjeDR8TsxCRoSGu5rCxrcc9xKzuBZ9q9s8AkbkUZ/RocFCPM4gvDZyHNIAkRwkCy86Pc/j9TyUIk/k8teOBaYaujnjnaJOFTIxAHvtrceQBugrgWFZ0Ehipcq7R3SNkjkK0PExqUFELo/TOcfkuVBbAQSbOtCp5YzH/TiDSqI8cjtfd6gIBiWd10i1g09sVfKc2484h3XLh3Oay6d3erhKdQYwvdm32BFz4iMvl+rhjN+R1p/2rdrS3mMPs4/lstcANsETg45EHbOwRyyPLYd1G2SvPFUk0SJqDq9MMds0LOasYN3KPqRRhqfvAiPUCfq03FnG/4ohprAw/kWlk7+z+WeJwcSY0oCklQFeGxnDnuE0D4v9d7DdKO9HGuVv5OzKHJSLNMhYQasYPjPPa33emlTfQ3X7pFMwzwLtGWCkYQliPZxz1uVz5eXdTMLl1J1t5NIf8DDw2oB6y5v73vBxMPFRD1bfpvX+o26VijXH+e2TStuySlh/S4lMsrIo231Zgn2e6buBOA8k5goynghQeCv4xvVWlu2GUxS53b1oWfMKT/hevTgSw7IPtv+u4gIdH9rpEqkVAf/RVjX9lBjZJbeDesx15DZCI1/H1EFuxNUtuGfrDIkhbfB0Xlp9YorSrGnQHN8j7AZsX3ywzK5ZDEt831cevlNXmb7SARZciHmtoVEhjVDRdCrwAhUYuezl1BfOEbDmIDUPvc7ug5rrW4XHLigX3BM+ncCLAQMIS6nU+gdlLC/3nr4+NsCaFw1iDSoE7+a/25ZFEV6aFcgcDxnIGRZWdocyLiWlX4Y8NrCb8jCVyiFnRh8r8bYMkrZB3zshMTJoHF9qg2ZLguxQwTJbNgAQvpQG4B/JXcswP4GHsKhwYs7Kb2C/SGIMWjdbtllXnW7Gl3pY4JnciASsHkVMSCTsJlPY+XbX0ayLwCPSkAyrY4GOiEXmc7kTbDpg36wTukoD0u52GO3Ki5ApxJTWeNkNgUFnmiT2gw0TONypJDErFxtfSxFCDPKxSIQpPY9WoLtycZ0diogTGaLkX+6gdrIFB9oqmBjFQ5tA0XrleC5tccT3PJLEl2AzwPGGtkq2mEkRRIzaqVGgXY2eHxAObKHUoUTvTBY4QA1P2KKdoohJFoj5AuU69eagTOEqQbVfsHiPNah13H5IwwYcuMrSNK5lusyaa3UrRmiz3a0FYKj4NN49IUnsOAtggzMeo11gpiFyZptFnOUfWLDK78lj7vGLXxnuAv6Bhl9FYBv4eWQIMXdU6m/BrSLcpLqvxX44Elo9Y5SWySDR2sEZ2IVveFZBxKwbDHgHrwcNhaAJYUl5te3ZZyki/NV9ENcCj4omzO9bUMQQb093YH4FiphR061OkZwH31eo2zc6APHZN483wbnwGkpKA9j4RuhSg9YfGuru4XRulZ+USrDwt6ONcfyqq5hLTJ8XlSdEZ4EvPMniPZ6P3MwvZx6VjNnmo2bXdZX3qS1MJllVbPcw+c/9V9FsaGQuOEyrIvDqEISTMhh8HVkWmk9gIsvRxxE8iiyWrLt0TeobyzjdNE0Wa38HxRMQ2lnA8uDLQ1bHe7Tgw14m5sbjWL4fP3fCdaPzptTMxOrus6ZpqqbHmqYtM+28EJjcvAnMCUJ1PPI57DUx/sMqBQVFK9xHiMEoDn3kKS+2F8cYXA7PAjNSucqnCfUNKVvOp20qYrysGVeqDF3a+4qrVCORlItVHjd9J5uUmSUZzAJfDQPm7Cm6KGcu2OCivqrhcJVcZ0OF+VMu9yzFOwElCwoaPFsek8jDzxeJOdBwYu5ppPI7F1we4+brjbqnzpeMb+C7hqFKF4nx7JlLODGw9SNGZPuRTNo3jBHCeL08N8daEiI8xHwhMfzs5o8XCrIviJgdCDXB0xA3wRged8mlTNPl8MWxplDQfefCrZUUfc3l2TXNB2iJe4PLHXxVmHolPpFIfR9TGATOAvw+MFqOa2qO27rhkTqnCQylqe2jf4BNJwOIObR4Hpd+pDt2cKkFegMWMiUUMSC5bKW297aSQx4AS1OZ3SyjekCZGUDMFTcy9WUgueG7xuvX6JL55yBmd2+yRJrQeZ+hIXhVzO8BCSTmGzMUgvLhbPBoUrx2d2FnvhNz2hcN3pGOLtz3HE0w/lhV3UYC/xK2zHTuyAdhnik8G2BUbMH9o4jJFdf73l9vTVtROX/kAgO0or9UGtMbaCo2krd1UW9PpyeI82VudsRL9aMA9uqCFw7mQkD2WIOGirEonm+oUEspwowspghIR0kNkyuOu5uL1RV2QRpADR8NvKPRAag1LewakDPdJerQWbJ0xfHoYIOOV5LuiuMlYh456CSfBbrnsMPE4cwrbw0xf3b59BIxN5UY9icTo9RtyrxTYyXGcU6Tdec0U0wo6O547q5SXyKmlbBcgy81ssMejWwvp8E9Q0zHuounzNVMCoM9M7u8SSUUjP9GF+6zeSYiFT9nZR1UlPrzGICbTd7emna7T9Jeen5iiTXfsWDYCSHfVzBI5ZtexZqnz0/84PLpJWLw5F/41Vku2CIxPrGriVm8rfHPiFH5PIFXInjgiMT4FnQgMfY7zpPAZabubJA/1GRGgPkSvlRWTUxCzPMTxLzWM1pmlsfxxs/bUeE/MLvGI5mBN3j4iZGU+4ipU93D8QN9s1uxvZdP62tn/az5xlkSlLG7REyUxL6boNHSzM3l0+9XTwZePu0npgbJ9BvE7KOEec+zfqQBuInx7pnfIwZvrXf//iiCiZmf04z0tbOqDi+ua7dPs4YafkUklBjogTMCc3iVGekfuDHXLtPpkUA5v6lhdveBRuOmvbvub7zjLbchZ5UXiaFUOHIXTrcC8yUXb6AOfYCKsrZ42dbbLfkNBUAd/Ykim+G9vpVNrl/U+XMNoFufYP7kVVXVc/H4d4l5FlVOZX8j1O89QKWtOkF5VrweQ6N/i5jjY1cUGSbRf/SalvXy6cT9zlkEQotm2eZ1Pu8Pv0uMyny/nM/3KiOc9+dUY8sTlI7Lp7sXHlAF77FOstIB6596UKjCRMdZ8LTk0qUqYcTgx6V5tyrt+2Aewuh6yMcHy0ZdpJZzmuby6YED8ukjHPq9MvNuRxQn8S+x5q49YW7FUGfH+3cB+rfH5OTFXt85zR89QPVLQvMXH6D69xBDhsun7c9PdMsMn6kwL2on/Wtav6QB2F/Unj8/4X3l5F2eUpuMnT8CMf7VdSvLZ8RQbpfutucnrF2k3eXT6nw66V+xY+YlPeUJ6SbvvZw6HIUD91usWbtWu4cO+5f7hjf1VMf6+wCCL58mRmgmjgeozMPA8e8Soy441Os4Hr3bbN7TfH+I+NefoPwbxPyF9zSTd++hGJjN354Z5p6ZCTFGA7C8/Cj7PdM996hOIk/LqWWW9qv5L+wZat64HF671B1TJAxvXOoqIhqunkzU9ZWRQwPI/ysawORCT30zptIFYpsGoOMBw00NiIVpAPE/S2j+qzQA24vagwYwWHXDk8XjF7VZ8/x52EzB8doKhwZAQt85U5dP9w85Dy8+p9rP3j/uPGCjcvqxGgTEmrK+/twReNiVJLLcGTO0MnqyeoTN37tezV/lTtUz3yzs9W7zMjjwlKwpbh/mP2p41m3GeX8jNrTMO2zyEnn//rjpGBScvUQ+1wA6S3Pk0LDLmfcXtWMpYy6r4nz5ZMUdt0W1SSmLx+u4f1HbaADEpgEML2qP5MwvPkKNCCVZWWxDHOmH06vI1Hf+f1/UpjHa7nl1v57dft3rucxyLrvLp13EkM+JmTKRfpmxwZQZLIaZ48P2cDsym249orTN1N3U9/v2cPi+IXqrszzvSbCzy/nD7aaV5YfbLSGN1PHG5rycLjgKNM6rIGvA/8VkCfUsJl5nhZvWXcXSnv95T8vVk+8PHcqJpTkMnHF8EKPO9P4f5aKiZkb5MN+qoPGYKmxwGSWzRTCzNGWopfk7Dg3ri9rdQh6W9GAH/f0Xtf9AN/tDYsgvE7PsNxvKzbVmZp5SVBg1Vbpl1mOReRVSucj6ZdY7wYZWZn6zjgs4/GaWkMZ0t32+K4P2p42F+LmAu6C1CsoZw3Jj8nMNIOnlzMCaR7LZqKVYRSfnCOSuw9ulVtbMpq04WPPf0QCMBHwjRhVUmDmlYV7U/n/WAH6LmPhHxBCzfIhRNON+mS0Q06uAY2KSMTHE9IwEETPc8MmMQyO2ETOIi/GloDOv4Lv3cAH7o4LUgln/OMesH/x11kzmrDlfZM3z0PEfsGazVP9nGsBvC81/FTGLL2qbZWZCGkbRZF5Fc9DQo9yraFqewrMqmssvak+Am/9w99+4pYbajZaCng/+asGVelKjm93+PU28TMAf0oh7OdO/2aQKGmyUBaqnB728HWvGe4/VqMs+ozWyVXGGNHo5ExzScDjOfy404x8JzfeQhk3O/BM0gB+oM/8BFXL9xSqNQ2oAAAAASUVORK5CYII="
    }
];


function SingleStat({ title, value, unit,imgUrl }: iStat) {
    const ref = React.useRef<any>(null)
    const isInView = useInView(ref, {})
    const timer = React.useRef<any>(null)
    const [progress, setProgress] = React.useState(value)
    React.useEffect(() => {
        if (isInView) {
            timer.current = setTimeout(() => setProgress(value), 500)
        }
        return () => clearTimeout(timer.current)
    }, [isInView])
    return (<motion.div
        variants={animateHeadingVariants}
        initial="initial"
        whileInView="animate"
        className='flex flex-col gap-y-6 mx-auto px-4 justify-center  items-center '>

        <div className='space-y-2'>
            {/* <Building size={60} className='font-light' /> */}
        <div>
        <img 
    src={imgUrl || "https://img.freepik.com/premium-vector/vector-minimalist-modern-house-icon-simple-silhouette_628924-7986.jpg"}
        alt="" />
        </div>
            <VariantHeading className='text-2xl lg:text-4xl font-medium text-center'>
                <AnimatedNumber className='font-black'
                    value={progress}
                />
                <span className='text-primary-color '>{unit}</span>
            </VariantHeading>
            <AnimatedSlideText
                inView
                // words={words}
                text={title}
                className='font-Marcellus+SC lowercase  text-blue-950 text-xs lg:text-xl font-black  '>

            </AnimatedSlideText>
            {/* <p className='font-Marcellus+SC text-blue-950 text-lg font-black '>{title}</p> */}


        </div>

    </motion.div>)
}
const Stats = () => {
    const [hoveIndex, setHoverIndex] = useState<number>(0);
    const TIME_OUT_DURATION = 1000
    const SLIDES = 4
    const check = () => hoveIndex && hoveIndex >= SLIDES ? true : false
    const validate = () => hoveIndex == null || check() ? setHoverIndex(0) : setHoverIndex(hoveIndex + 1);
    const timer = React.useRef<any>(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            validate()
        }, TIME_OUT_DURATION)
        return () => {
            clearInterval(timer.current)
        }
    }, [hoveIndex, timer])
    return (
        <section
            className='py-24  '
        >
            <div
                className='max-w-8xl w-full  mx-auto p-4'
            >

                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />  <div className='flex items-center'>OUR Stat<span className='md:hidden'>s</span><span className='hidden md:block'>istics</span></div>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>




                <div className="md:grid grid-cols-[1fr,1fr] max-w-7xl- mx-auto gap-x-6 mb-10">
                    <div className=' left-0  '>

                        <div

                            className=" h-[min(550px,calc(100vh-3.5rem))] rounded-0 dark:bg-neutral-900  dark:border-neutral-800 mx-auto  "
                        >
                            <Compare
                                firstImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_03-400x400.jpg"
                                secondImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Stainless-Steel-Cleaning.jpg"
                                firstImageClassName="object-cover object-left-top w-full  rounded-none"
                                secondImageClassname="object-cover object-left-top w-full  rounded-none"
                                className="w-full h-full !rounded-none px-0 border-0"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>
                    </div>
                    {/* right side div */}
                    <div>
                        <VariantHeading
                            className='text-4xl font-semibold !text-bg-primary-color text-center- md:text-start mb-6 capitalize'
                        >
                            <span className='text-primary-color'>
                                15 Years
                            </span> Experience
                        </VariantHeading>
                     <Heading className='mb-6'>
  With over 15 years of hands-on experience in the cleaning industry, our team brings proven skill, precision, and reliability. Over the years, we’ve worked on a wide range of spaces — from homes and apartments to offices, shops, Airbnbs, and other environments that require consistent, high-quality care.
</Heading>

<p className='mb-6'>
  Our experience has allowed us to refine our cleaning methods, adopt industry best practices, and understand exactly what different spaces need. We know how to treat delicate surfaces, deep clean high-traffic zones, remove stubborn dirt safely, and maintain a fresh, healthy environment.
</p>

<p className='mb-6'>
  Working with clients of all types has made us adaptable and detail-focused. Whether it’s a routine clean, a deep clean, or a full property reset, we tailor our approach to match your needs and deliver reliable, consistent results every time.
</p>

<p className='mb-6'>
  Our 15-year journey has shaped us into a cleaning service you can trust — one built on professionalism, punctuality, strong communication, and a commitment to quality. We don’t just clean; we restore order, comfort, and freshness to every space we touch.
</p>
                       <Link to={"/contact-us?rd_from=hero"}>
                       <Button

className="block-  sticky z-[100]  
w-[min(420px,calc(100%-1rem))] px-0
mx-auto font-bold text-sm h-14 lg:ml-auto lg:mr-4
bottom-0 rounded-none   left-0 uppercase  text-center bg-secondary-color ">

contact us
</Button>
                       </Link>
                        {/* <Link to={"/about-us"}>
                            <Button className='px-8  shadow-sm top-auto bg-secondary-color right-2'>Learn More </Button>

                        </Link> */}
                        <Link to={"/contact-us?rd_from=hero"}>

                        </Link>
                    </div>
                </div>
                {/* stats */}
                <div className='mt-4 grid gap-y-6 [perspective:800px] [transform-style:preserve-3d]  grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))] justify-center gap-x-4  mx-auto max-w-6xl'>
                    {stats.map((arr, idx) => (
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesamehere"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto py-4  bg-red-50-'
                            animatedClassName={"bg-secondary-color/10   h-[2px] bottom-0 top-auto  "}
                        >

                            <SingleStat key={idx}
                                {...arr}
                            />

                        </AnimatedHeadLessUi>
                    )
                    )}
                </div>

            </div>

        </section>
    )
}

export default Stats