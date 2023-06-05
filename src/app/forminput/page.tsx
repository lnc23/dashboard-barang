"use client"
import { Layout, Section } from "@/components"

export default function FormInputPage() {
  return (
    <Layout>
      <div className="px-10 py-10 flex-grow">
        <Section marginTop={"5"}>
          <input placeholder="Email"></input>
        </Section>
      </div>
    </Layout>
  )
}
